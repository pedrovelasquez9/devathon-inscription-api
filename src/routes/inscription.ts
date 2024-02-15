import { Router } from "express";
import * as inscriptionsController from "../controllers/inscription";

export const router = Router();

router.get("/", inscriptionsController.getAllInscriptions);

router.get("/:id", inscriptionsController.getInscriptionById);

router.post("/", inscriptionsController.createInscription);

router.patch("/:id", inscriptionsController.editInscription);

router.delete("/:id", inscriptionsController.deleteInscription);
