import { addClub } from "../repositories/club.repository.js";
import { Age, Level } from "@prisma/client";
export const clubAdd = async (clubData, userId) => {
    const club = await addClub(clubData, userId);
    return club;
};
//# sourceMappingURL=club.service.js.map