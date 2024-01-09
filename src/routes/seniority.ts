import express, { Router, Request, Response } from "express";
import {
    getAllSeniorities,
    createSeniority,
    editSeniority,
    deleteSeniority,
    getSeniorityByID,
} from "../services/seniority";

export const router = Router();

router.get("/seniority", async (request: Request, response: Response) => {
    try {
        response.send(await getAllSeniorities());
    } catch (error) {
        response.send(error);
    }
});

router.get("/seniority/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await getSeniorityByID(id));
    } catch (error) {
        response.send("error");
    }
});

router.post("/seniority", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createSeniority(body));
    } catch (error) {
        response.send("error");
    }
});

router.patch("/seniority/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editSeniority(body, id));
    } catch (error) {
        response.send("error");
    }
});

router.delete(
    "/seniority/:id",
    async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            response.send(await deleteSeniority(id));
        } catch (error) {
            response.send("error");
        }
    },
);
