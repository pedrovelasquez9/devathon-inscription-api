import prisma from "../client";
import { Developer, DeveloperData } from "../types/Developer";
import { Status } from "../utils/constants";

const prismaDeveloperModel = prisma.developer;
const inscriptionResultFields = {
    id: true,
    fullname: true,
    email: true,
    github_link: true,
    linkedin_link: true,
    idrole: true,
    ceremony_available: true,
    discord_username: true,
    idseniority: true,
    looking_for_work: true,
    retire_probability: true,
    condition_accepted: true,
    idteam: true
};

export const getAllInscriptions = async (): Promise<DeveloperData[]> => {
    try {
        return await prismaDeveloperModel.findMany({
            where: { status: Status.Active },
            select: inscriptionResultFields
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInscriptionById = async (
    id: number
): Promise<DeveloperData | null> => {
    try {
        return await prismaDeveloperModel.findUnique({
            where: {
                id,
                status: Status.Active
            },
            select: inscriptionResultFields
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createInscription = async (
    inscriptionData: Developer
): Promise<Developer> => {
    try {
        return await prismaDeveloperModel.create({
            data: inscriptionData
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editInscription = async (
    inscriptionData: Developer,
    id: number
): Promise<Developer> => {
    try {
        return await prismaDeveloperModel.update({
            where: {
                id
            },
            data: inscriptionData
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteInscription = async (id: number): Promise<Developer> => {
    try {
        return await prismaDeveloperModel.update({
            where: {
                id
            },
            data: {
                status: Status.Inactive
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
