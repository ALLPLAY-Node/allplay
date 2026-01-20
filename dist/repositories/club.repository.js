import { prisma } from "../db.config.js";
import { Age, Level } from "@prisma/client";
export const addClub = async (clubData, userId) => {
    const region = await prisma.region.findFirst({
        where: { city: clubData.city, district: clubData.district },
    });
    if (!region) {
        throw new Error("Region not found");
    }
    const sportType = await prisma.sportType.findFirst({
        where: { sport_type: clubData.sportType },
    });
    if (!sportType) {
        throw new Error("Sport type not found");
    }
    return await prisma.$transaction(async (tx) => {
        const club = await tx.clubs.create({
            data: {
                name: clubData.clubName,
                age: clubData.ageGroup,
                capacity: clubData.maxMembers,
                activity_frequency: clubData.activityFrequency,
                join_requirement: clubData.joinRequirement,
                summary: clubData.description,
                level: clubData.level,
                contact_number: clubData.contact,
                homepage_url: clubData.hompageUrl ?? null,
                region_id: region.id,
                sport_type_id: sportType.id,
                created_at: new Date(),
            },
        });
        await tx.userClubs.create({
            data: {
                user_id: BigInt(userId),
                club_id: BigInt(club.id),
                is_leader: true,
                created_at: new Date(),
            },
        });
        return club;
    });
};
//# sourceMappingURL=club.repository.js.map