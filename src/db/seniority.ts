import prisma from "../client";
import { Seniority, SeniorityData } from "../types/Seniority";
import { Status } from "../utils/constants";

const prismaSeniorityModel = prisma.seniority;
const seniorityResultFields = {
    id: true,
    name: true
};

export const getAllSeniorities = async (): Promise<SeniorityData[]> => {
    try {
        return await prismaSeniorityModel.findMany({
            where: { status: Status.Active },
            select: seniorityResultFields
        });
    } catch (error) {
        throw error;
    }
};

export const getSeniorityById = async (
    id: number
): Promise<SeniorityData | null> => {
    try {
        return await prismaSeniorityModel.findUnique({
            where: {
                id,
                status: Status.Active
            },
            select: seniorityResultFields
        });
    } catch (error) {
        throw error;
    }
};

export const createSeniority = async (
    seniorityData: Seniority
): Promise<Seniority> => {
    try {
        return await prismaSeniorityModel.create({
            data: seniorityData
        });
    } catch (error) {
        throw error;
    }
};

export const editSeniority = async (
    seniorityData: Seniority,
    id: number
): Promise<Seniority> => {
    try {
        return await prismaSeniorityModel.update({
            where: {
                id
            },
            data: seniorityData
        });
    } catch (error) {
        throw error;
    }
};

export const deleteSeniority = async (id: number): Promise<Seniority> => {
    try {
        return await prismaSeniorityModel.update({
            where: {
                id
            },
            data: {
                status: Status.Inactive
            }
        });
    } catch (error) {
        throw error;
    }
};
