import { Router, Request, Response } from "express";
import {
    getAllTeams,
    createTeam,
    editTeam,
    deleteTeam,
    getTeamByID,
} from "../services/team";

export const router = Router();

router.get("/team", async (request: Request, response: Response) => {
    try {
        response.send(await getAllTeams());
    } catch (error) {
        response.send(error);
    }
});

router.get("/team/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await getTeamByID(id));
    } catch (error) {
        response.send("error");
    }
});

router.post("/team", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createTeam(body));
    } catch (error) {
        response.send("error");
    }
});

router.patch("/team/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editTeam(body, id));
    } catch (error) {
        response.send("error");
    }
});

router.delete("/team/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await deleteTeam(id));
    } catch (error) {
        response.send("error");
    }
});
