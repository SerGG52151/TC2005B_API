import { Router } from "express";
import { login } from "../controllers/login.controllers.js"

/* Router para añadir rutas a la aplicacion */
const router = Router();

/* Testing requests and responses with nodemon */
router.get("/login", login);

export default router;