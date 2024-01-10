import prisma from "../client";
import { Seniority, SeniorityData } from "../interfaces/Seniority";
import { Status } from "../utils/constants";

const prismaSeniorityModel = prisma.seniority;
const seniorityResultFields = {
    id: true,
    name: true,
};

export const getAllSeniorities = async (): Promise<SeniorityData[]> => {
    try {
        return await prismaSeniorityModel.findMany({
            where: { status: Status.Active },
            select: seniorityResultFields,
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
        const seniorityRecordId = parseInt(id);
        return await prismaSeniorityModel.findUnique({
            where: {
                id: seniorityRecordId,
                status: Status.Active,
            },
            select: seniorityResultFields,
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
        return await prismaSeniorityModel.create({
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
        return await prismaSeniorityModel.update({
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
        const seniorityRecordId = parseInt(id);
        return await prismaSeniorityModel.update({
            where: {
                id: seniorityRecordId,
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
