import{ Router } from 'express'
import BaitRoutes from "./baitRoutes.js"
import TrophyRoutes from "./trophyRoutes.js"
const router = Router()

router.use("/api/bait", BaitRoutes)
router.use("/api/trophy", TrophyRoutes)


export default router