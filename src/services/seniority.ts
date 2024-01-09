import prisma from "../client";
import { Seniority, SeniorityData } from "../interfaces/Seniority";

export const getAllSeniorities = async (): Promise<SeniorityData[]> => {
    try {
        return await prisma.seniority.findMany({
            where: { status: 1 },
            select: {
                id: true,
                name: true,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSeniorityByID = async (
    id: string,
): Promise<SeniorityData | null> => {
    try {
        const recordId = parseInt(id);
        return await prisma.seniority.findUnique({
            where: {
                id: recordId,
                status: 1,
            },
            select: {
                id: true,
                name: true,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createSeniority = async (
    SeniorityData: Seniority,
): Promise<Seniority> => {
    try {
        return await prisma.seniority.create({
            data: SeniorityData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editSeniority = async (
    SeniorityData: Seniority,
    id: string,
): Promise<Seniority> => {
    try {
        const recordId = parseInt(id);
        return await prisma.seniority.update({
            where: {
                id: recordId,
            },
            data: SeniorityData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteSeniority = async (id: string): Promise<Seniority> => {
    try {
        const recordId = parseInt(id);
        return await prisma.seniority.update({
            where: {
                id: recordId,
            },
            data: {
                status: 0,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
