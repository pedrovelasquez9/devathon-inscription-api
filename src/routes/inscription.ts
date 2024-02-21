import { Router } from "express";
import * as inscriptionsController from "../controllers/inscription";
import * as inscriptionValidationMiddleware from "../validators/inscription";

export const router = Router();

router.get("/", inscriptionsController.getAllInscriptions);

router.get("/:id", inscriptionsController.getInscriptionById);

router.post(
    "/",
    inscriptionValidationMiddleware.usePostValidatorRules(),
    inscriptionValidationMiddleware.validate,
    inscriptionsController.createInscription
);

router.patch(
    "/:id",
    inscriptionValidationMiddleware.usePatchValidatorRules(),
    inscriptionValidationMiddleware.validate,
    inscriptionsController.editInscription
);

router.delete("/:id", inscriptionsController.deleteInscription);
