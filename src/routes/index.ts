import express from "express";
import { roleRoutes } from "./role";
import { routerDocs } from "./api-docs";

export const router = express.Router();
router.use(roleRoutes, routerDocs);
