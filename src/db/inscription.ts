import prisma from "../client";
import { Inscription, InscriptionData } from "../types/Inscription";
import { Status } from "../utils/constants";

const prismaInscriptionModel = prisma.inscription;
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

export const getAllInscriptions = async (): Promise<InscriptionData[]> => {
    try {
        return await prismaInscriptionModel.findMany({
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
): Promise<InscriptionData | null> => {
    try {
        return await prismaInscriptionModel.findUnique({
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
    inscriptionData: Inscription
): Promise<Inscription> => {
    try {
        return await prismaInscriptionModel.create({
            data: inscriptionData
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editInscription = async (
    inscriptionData: Inscription,
    id: number
): Promise<Inscription> => {
    try {
        return await prismaInscriptionModel.update({
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

export const deleteInscription = async (id: number): Promise<Inscription> => {
    try {
        return await prismaInscriptionModel.update({
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
