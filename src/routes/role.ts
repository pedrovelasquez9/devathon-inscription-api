import { Router } from "express";
import * as rolesController from "../controllers/role";
import * as roleValidatorMiddleware from "../validators/role";

export const router = Router();

router.get("/", rolesController.getAllRoles);

router.get("/:id", rolesController.getRoleById);

router.post(
    "/",
    roleValidatorMiddleware.usePostValidatorRules(),
    roleValidatorMiddleware.validate,
    rolesController.createNewRole
);

router.patch(
    "/:id",
    roleValidatorMiddleware.usePatchValidatorRules(),
    roleValidatorMiddleware.validate,
    rolesController.modifyRole
);

router.delete("/:id", rolesController.removeRole);
