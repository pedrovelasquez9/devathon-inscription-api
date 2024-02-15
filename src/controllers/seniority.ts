import * as senioritiesService from "../services/seniority";
import { Request, Response } from "express";

export const getAllSeniorities = async (
    _request: Request,
    response: Response
) => {
    try {
        response.send(await senioritiesService.getAllSeniorities());
    } catch (error) {
        response.send(error);
    }
};

export const getSeniorityById = async (
    request: Request,
    response: Response
) => {
    try {
        const { id } = request.params;
        response.send(await senioritiesService.getSeniorityByID(id));
    } catch (error) {
        response.send("error");
    }
};

export const createSeniority = async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await senioritiesService.createSeniority(body));
    } catch (error) {
        response.send("error");
    }
};

export const modifySeniority = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await senioritiesService.editSeniority(body, id));
    } catch (error) {
        response.send("error");
    }
};

export const deleteSeniority = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await senioritiesService.deleteSeniority(id));
    } catch (error) {
        response.send("error");
    }
};
