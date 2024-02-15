import { Seniority, SeniorityData } from "../types/Seniority";
import * as db from "../db/seniority";

export const getAllSeniorities = async (): Promise<SeniorityData[]> => {
    return db.getAllSeniorities();
};

export const getSeniorityByID = async (
    id: string
): Promise<SeniorityData | null> => {
    try {
        const seniorityRecordId = parseInt(id);
        return db.getSeniorityById(seniorityRecordId);
    } catch (error) {
        throw error;
    }
};

export const createSeniority = async (
    seniorityData: Seniority
): Promise<Seniority> => {
    try {
        return db.createSeniority(seniorityData);
    } catch (error) {
        throw error;
    }
};

export const editSeniority = async (
    seniorityData: Seniority,
    id: string
): Promise<Seniority> => {
    try {
        const recordId = parseInt(id);
        return db.editSeniority(seniorityData, recordId);
    } catch (error) {
        throw error;
    }
};

export const deleteSeniority = async (id: string): Promise<Seniority> => {
    try {
        const seniorityRecordId = parseInt(id);
        return db.deleteSeniority(seniorityRecordId);
    } catch (error) {
        throw error;
    }
};
