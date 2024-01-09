import express from "express";
import { router as RoleRoutes } from "./role";
import { router as DocsRoutes } from "./api-docs";
import { router as SeniorityRoutes } from "./seniority";

export const router = express.Router();
router.use(RoleRoutes, DocsRoutes, SeniorityRoutes);
