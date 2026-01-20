import { clubAdd } from "../services/club.service.js";
import { clubDtos } from "../dtos/club.dto.js";
import { StatusCodes } from "http-status-codes";
export const handleClubAdd = async (req, res, next) => {
    const userId = req.user.id;
    const clubs = await clubAdd(clubDtos(req.body), userId);
    res.status(StatusCodes.OK).success("동호회가 성공적으로 등록되었습니다", {
        Id: clubs.id,
        clubName: clubs.name,
        createdAt: clubs.created_at,
    });
};
//# sourceMappingURL=club.controller.js.map