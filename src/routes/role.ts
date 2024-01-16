import { Router, Request, Response } from "express";
import {
    getAllRoles,
    createRole,
    editRole,
    deleteRole,
    getRoleByID,
} from "../services/role";

export const router = Router();

router.get("/", async (request: Request, response: Response) => {
    try {
        response.send(await getAllRoles());
    } catch (error) {
        response.send(error);
    }
});

router.get("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await getRoleByID(id));
    } catch (error) {
        response.send("error");
    }
});

router.post("/", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createRole(body));
    } catch (error) {
        response.send("error");
    }
});

router.patch("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editRole(body, id));
    } catch (error) {
        response.send("error");
    }
});

router.delete("/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await deleteRole(id));
    } catch (error) {
        response.send("error");
    }
});
