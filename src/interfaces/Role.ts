import { Tracking } from "./Tracking";

export type RoleData = {
    id: number;
    name: string;
    status?: number;
};

export type Role = Tracking & RoleData;
