import * as roleService from "../services/role";
import { Request, Response } from "express";

export const getAllRoles = async (_request: Request, response: Response) => {
    try {
        response.send(await roleService.getAllRoles());
    } catch (error) {
        response.send(error);
    }
};

export const getRoleById = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await roleService.getRoleByID(id));
    } catch (error) {
        response.send("error");
    }
};

export const createNewRole = async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await roleService.createRole(body));
    } catch (error) {
        response.send("error");
    }
};

export const modifyRole = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await roleService.editRole(body, id));
    } catch (error) {
        response.send("error");
    }
};

export const removeRole = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await roleService.deleteRole(id));
    } catch (error) {
        response.send("error");
    }
};
