import express from "express";
import { router as RoleRoutes } from "./role";
import { router as DocsRoutes } from "./api-docs";
import { router as SeniorityRoutes } from "./seniority";
import { router as TeamRoutes } from "./team";
import { router as DeveloperInscriptionRoutes } from "./inscription";

export const router = express.Router();
router.use("/roles", RoleRoutes);
router.use("/inscriptions", DeveloperInscriptionRoutes);
router.use("/seniorities", SeniorityRoutes);
router.use("/teams", TeamRoutes);
router.use(DocsRoutes);
