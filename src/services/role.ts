import { Role, RoleData } from "../types/Role";
import * as db from "../db/role";

export const getAllRoles = async (): Promise<RoleData[]> => {
    return db.getAllRoles();
};

export const getRoleByID = async (id: string): Promise<RoleData | null> => {
    const roleRecordId = Number(id);
    return db.getRoleByID(roleRecordId);
};

export const createRole = async (roleData: Role): Promise<Role> => {
    return db.createRole(roleData);
};

export const editRole = async (roleData: Role, id: string): Promise<Role> => {
    const recordId = Number(id);
    return db.editRole(roleData, recordId);
};

export const deleteRole = async (id: string): Promise<Role> => {
    const roleRecordId = Number(id);
    return db.deleteRole(roleRecordId);
};
