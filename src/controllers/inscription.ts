import { Request, Response } from "express";
import * as inscriptionService from "../services/inscription";

export const getAllInscriptions = async (
    _request: Request,
    response: Response
) => {
    try {
        response.send(await inscriptionService.getAllInscriptions());
    } catch (error) {
        response.send(error);
    }
};

export const getInscriptionById = async (
    request: Request,
    response: Response
) => {
    try {
        const { id } = request.params;
        response.send(await inscriptionService.getInscriptionById(id));
    } catch (error) {
        response.send("error");
    }
};

export const createInscription = async (
    request: Request,
    response: Response
) => {
    try {
        const { body } = request;
        response.send(await inscriptionService.createInscription(body));
    } catch (error) {
        response.send("error");
    }
};

export const editInscription = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await inscriptionService.editInscription(body, id));
    } catch (error) {
        response.send("error");
    }
};

export const deleteInscription = async (
    request: Request,
    response: Response
) => {
    try {
        const { id } = request.params;
        response.send(await inscriptionService.deleteInscription(id));
    } catch (error) {
        response.send("error");
    }
};
