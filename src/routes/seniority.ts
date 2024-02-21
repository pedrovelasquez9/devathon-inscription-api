import { Router } from "express";
import * as senioritiesController from "../controllers/seniority";

export const router = Router();

router.get("/", senioritiesController.getAllSeniorities);

router.get("/:id", senioritiesController.getSeniorityById);

router.post("/", senioritiesController.createSeniority);

router.patch("/:id", senioritiesController.modifySeniority);

router.delete("/:id", senioritiesController.deleteSeniority);
