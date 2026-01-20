import { Age, Level } from "@prisma/client";
export const clubDtos = (data) => {
    return {
        clubName: data.clubName,
        sportType: data.sportType,
        city: data.city,
        district: data.district,
        ageGroup: data.ageGroup,
        imageURL: data.imageURL,
        maxMembers: data.maxMembers,
        activityFrequency: data.activityFrequency,
        level: data.level,
        description: data.description,
        joinRequirement: data.joinRequirement,
        contact: data.contact,
        hompageUrl: data.hompageUrl,
    };
};
//# sourceMappingURL=club.dto.js.map