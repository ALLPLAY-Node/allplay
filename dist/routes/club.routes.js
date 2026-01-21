import express from "express";
import { handleClubAdd, handleClubUpdate, handleClubJoin, handleGetJoinRequests, handleApproveJoinRequest, } from "../controllers/club.controller.js";
import { isLogin } from "../middleware/auth.js";
const router = express.Router();
router.post("/clubs", isLogin, handleClubAdd);
router.put("/clubs/:clubId", isLogin, handleClubUpdate);
router.post("/clubs/:clubId/join", isLogin, handleClubJoin);
router.get("/clubs/:clubId/join-requests", isLogin, handleGetJoinRequests);
router.post("/clubs/:clubId/join-requests/:requestId", isLogin, handleApproveJoinRequest);
export default router;
//# sourceMappingURL=club.routes.js.map