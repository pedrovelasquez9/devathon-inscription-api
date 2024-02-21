import { Router } from "express";
import * as teamController from "../controllers/team";

export const router = Router();

router.get("/", teamController.getAllTeams);

router.get("/:id", teamController.getTeamById);

router.post("/", teamController.createTeam);

router.patch("/:id", teamController.editTeam);

router.delete("/:id", teamController.deleteTeam);
