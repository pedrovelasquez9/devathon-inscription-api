import prisma from "../client";
import { Developer, DeveloperData } from "../types/Developer";
import { Status } from "../utils/constants";

const prismaDeveloperModel = prisma.developer;
const developerResultFields = {
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
    idteam: true,
};

export const getAllDevelopers = async (): Promise<DeveloperData[]> => {
    try {
        return await prismaDeveloperModel.findMany({
            where: { status: Status.Active },
            select: developerResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDeveloperByID = async (
    id: string,
): Promise<DeveloperData | null> => {
    try {
        const developerRecordId = parseInt(id);
        return await prismaDeveloperModel.findUnique({
            where: {
                id: developerRecordId,
                status: Status.Active,
            },
            select: developerResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const signUpDeveloper = async (
    developerData: Developer,
): Promise<Developer> => {
    try {
        return await prismaDeveloperModel.create({
            data: developerData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editDeveloperInscription = async (
    developerData: Developer,
    id: string,
): Promise<Developer> => {
    try {
        const recordId = parseInt(id);
        return await prismaDeveloperModel.update({
            where: {
                id: recordId,
            },
            data: developerData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteDeveloperInscription = async (
    id: string,
): Promise<Developer> => {
    try {
        const developerRecordId = parseInt(id);
        return await prismaDeveloperModel.update({
            where: {
                id: developerRecordId,
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
