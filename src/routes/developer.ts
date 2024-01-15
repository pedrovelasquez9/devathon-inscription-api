import { Router, Request, Response } from "express";
import {
    getAllDevelopers,
    signUpDeveloper,
    editDeveloperInscription,
    deleteDeveloperInscription,
    getDeveloperByID,
} from "../services/developer";

export const router = Router();

router.get(
    "/developer-inscription",
    async (request: Request, response: Response) => {
        try {
            response.send(await getAllDevelopers());
        } catch (error) {
            response.send(error);
        }
    },
);

router.get(
    "/developer-inscription/:id",
    async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            response.send(await getDeveloperByID(id));
        } catch (error) {
            response.send("error");
        }
    },
);

router.post(
    "/developer-inscription",
    async (request: Request, response: Response) => {
        try {
            const { body } = request;
            response.send(await signUpDeveloper(body));
        } catch (error) {
            response.send("error");
        }
    },
);

router.patch(
    "/developer-inscription/:id",
    async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const { body } = request;
            response.send(await editDeveloperInscription(body, id));
        } catch (error) {
            response.send("error");
        }
    },
);

router.delete(
    "/developer-inscription/:id",
    async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            response.send(await deleteDeveloperInscription(id));
        } catch (error) {
            response.send("error");
        }
    },
);
