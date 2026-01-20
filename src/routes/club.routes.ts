import express from "express";
import { handleClubAdd } from "../controllers/club.controller.js";

const router = express.Router();

router.post("/clubs", handleClubAdd);

export default router;
