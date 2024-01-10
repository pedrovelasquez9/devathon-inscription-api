import { Tracking } from "./Tracking";

export type TeamData = {
    id: number;
    name: string;
    stack_backend: string;
    stack_frontend: string;
    available_backend_quota: number;
    available_frontend_quota: number;
    edition: number;
};

export type Team = Tracking & TeamData;
