import { Router } from "express";
import { createBait, fetchBait, showBait } from "../Controller/baitController.js";
const router = Router()

router.post("/", createBait)
router.get("/:id", showBait)
router.get("/", fetchBait)

export default router;