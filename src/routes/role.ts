import express, { Router, Request, Response } from "express";
import {
    getAllRoles,
    createRole,
    editRole,
    deleteRole,
    getRoleByID,
} from "../services/role";

export const roleRoutes = Router();

roleRoutes.get("/role", async (request: Request, response: Response) => {
    try {
        response.send(await getAllRoles());
    } catch (error) {
        response.send(error);
    }
});

roleRoutes.get("/role/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await getRoleByID(id));
    } catch (error) {
        response.send("error");
    }
});

roleRoutes.post("/role", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createRole(body));
    } catch (error) {
        response.send("error");
    }
});

roleRoutes.patch("/role/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editRole(body, id));
    } catch (error) {
        response.send("error");
    }
});

roleRoutes.delete("/role/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await deleteRole(id));
    } catch (error) {
        response.send("error");
    }
});
