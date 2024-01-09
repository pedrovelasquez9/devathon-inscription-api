import prisma from "../client";
import { Role, RoleData } from "../interfaces/Role";

export const getAllRoles = async (): Promise<RoleData[]> => {
    try {
        return await prisma.role.findMany({
            where: { status: 1 },
            select: {
                id: true,
                name: true,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getRoleByID = async (id: string): Promise<RoleData | null> => {
    try {
        const recordId = parseInt(id);
        return await prisma.role.findUnique({
            where: {
                id: recordId,
                status: 1,
            },
            select: {
                id: true,
                name: true,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createRole = async (roleData: Role): Promise<Role> => {
    try {
        return await prisma.role.create({
            data: roleData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editRole = async (roleData: Role, id: string): Promise<Role> => {
    try {
        const recordId = parseInt(id);
        return await prisma.role.update({
            where: {
                id: recordId,
            },
            data: roleData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteRole = async (id: string): Promise<Role> => {
    try {
        const recordId = parseInt(id);
        return await prisma.role.update({
            where: {
                id: recordId,
            },
            data: {
                status: 0,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
