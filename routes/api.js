import { Router } from "express";
import AuthController from "../Controller/AuthController.js";

 const router = Router()

 router.post("/auth/register", AuthController.register)
 router.post("/auth/login", AuthController.login);
 router.get("/send-email", AuthController.sendTestEmail);

 export default router