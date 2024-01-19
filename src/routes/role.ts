import { Router } from "express";
import * as rolesComponent from "../components/role";

export const router = Router();

router.get("/", rolesComponent.getAllRoles);

router.get("/:id", rolesComponent.getRoleById);

router.post("/", rolesComponent.createNewRole);

router.patch("/:id", rolesComponent.modifyRole);

router.delete("/:id", rolesComponent.removeRole);
