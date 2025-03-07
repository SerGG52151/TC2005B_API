import { Router } from "express";
import { marco, ping, raiz } from "../controllers/index.controllers.js";

/* Router para añadir rutas a la aplicacion */
const router = Router();

/* Testing requests and responses with nodemon */
router.get("/", raiz);
router.get("/marco", marco);
router.get("/ping", ping);

export default router;