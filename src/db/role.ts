import prisma from "../client";
import { Role, RoleData } from "../types/Role";
import { Status } from "../utils/constants";

const prismaRoleModel = prisma.role;
const roleResultFields = {
    id: true,
    name: true,
};

export const getAllRoles = async (): Promise<RoleData[]> => {
    try {
        return await prismaRoleModel.findMany({
            where: { status: Status.Active },
            select: roleResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getRoleByID = async (id: number): Promise<RoleData | null> => {
    try {
        return await prismaRoleModel.findUnique({
            where: {
                id,
                status: Status.Active,
            },
            select: roleResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createRole = async (roleData: Role): Promise<Role> => {
    try {
        return await prismaRoleModel.create({
            data: roleData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editRole = async (roleData: Role, id: number): Promise<Role> => {
    try {
        return await prismaRoleModel.update({
            where: {
                id,
            },
            data: roleData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteRole = async (id: number): Promise<Role> => {
    try {
        return await prismaRoleModel.update({
            where: {
                id,
            },
            data: {
                status: Status.Inactive,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
