import { Tracking } from "./Tracking";

export type DeveloperData = {
    id: number;
    fullname: string;
    email: string;
    github_link: string;
    linkedin_link: string;
    idrole: number;
    ceremony_available: number;
    discord_username: string;
    idseniority: number;
    looking_for_work: number;
    retire_probability: number;
    condition_accepted: number;
    idteam: number;
    status?: number;
};

export type Developer = Tracking & DeveloperData;
