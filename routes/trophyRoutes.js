import { Router } from "express";
import { createTrophy, showTrohy, trophyList } from "../Controller/trophyController.js";
const router = Router()

router.post("/", createTrophy)
router.get("/", trophyList)
router.get("/:id", showTrohy)

export default router