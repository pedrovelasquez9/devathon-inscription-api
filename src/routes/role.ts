import { Router } from "express";
import * as rolesController from "../controllers/role";

export const router = Router();

router.get("/", rolesController.getAllRoles);

router.get("/:id", rolesController.getRoleById);

router.post("/", rolesController.createNewRole);

router.patch("/:id", rolesController.modifyRole);

router.delete("/:id", rolesController.removeRole);
