import { Request, Response } from "express";
import * as teamService from "../services/team";

export const getAllTeams = async (_request: Request, response: Response) => {
    try {
        response.send(await teamService.getAllTeams());
    } catch (error) {
        response.send(error);
    }
};

export const getTeamById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await teamService.getTeamByID(id));
    } catch (error) {
        response.send("error");
    }
};

export const createTeam = async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await teamService.createTeam(body));
    } catch (error) {
        response.send("error");
    }
};

export const editTeam = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await teamService.editTeam(body, id));
    } catch (error) {
        response.send("error");
    }
};

export const deleteTeam = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await teamService.deleteTeam(id));
    } catch (error) {
        response.send("error");
    }
};
