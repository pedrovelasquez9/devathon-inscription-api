import prisma from "../client";
import { Role, RoleData } from "../interfaces/Role";
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

export const getRoleByID = async (id: string): Promise<RoleData | null> => {
    try {
        const roleRecordId = parseInt(id);
        return await prismaRoleModel.findUnique({
            where: {
                id: roleRecordId,
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

export const editRole = async (roleData: Role, id: string): Promise<Role> => {
    try {
        const recordId = parseInt(id);
        return await prismaRoleModel.update({
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
        const roleRecordId = parseInt(id);
        return await prismaRoleModel.update({
            where: {
                id: roleRecordId,
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
