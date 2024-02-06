import { Tracking } from "./Tracking";

export type SeniorityData = {
    id: number;
    name: string;
    status?: number;
};

export type Seniority = Tracking & SeniorityData;
