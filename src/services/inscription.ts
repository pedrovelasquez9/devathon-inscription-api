import prisma from "../client";
import { Developer, DeveloperData } from "../types/Developer";
import { Status } from "../utils/constants";
import * as db from "../db/inscription";

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
    idteam: true
};

export const getAllInscriptions = async (): Promise<DeveloperData[]> => {
    try {
        return db.getAllInscriptions();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInscriptionById = async (
    id: string
): Promise<DeveloperData | null> => {
    try {
        const developerRecordId = parseInt(id);
        return db.getInscriptionById(developerRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createInscription = async (
    inscriptionData: Developer
): Promise<Developer> => {
    try {
        return db.createInscription(inscriptionData);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editInscription = async (
    inscriptionData: Developer,
    id: string
): Promise<Developer> => {
    try {
        const inscriptionRecordId = parseInt(id);
        return db.editInscription(inscriptionData, inscriptionRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteDeveloperInscription = async (
    id: string
): Promise<Developer> => {
    try {
        const inscriptionRecordId = parseInt(id);
        return db.deleteInscription(inscriptionRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
