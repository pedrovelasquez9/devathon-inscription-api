import { Inscription, InscriptionData } from "../types/Inscription";
import * as db from "../db/inscription";

export const getAllInscriptions = async (): Promise<InscriptionData[]> => {
    try {
        return db.getAllInscriptions();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInscriptionById = async (
    id: string
): Promise<InscriptionData | null> => {
    try {
        const InscriptionRecordId = parseInt(id);
        return db.getInscriptionById(InscriptionRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createInscription = async (
    inscriptionData: Inscription
): Promise<Inscription> => {
    try {
        return db.createInscription(inscriptionData);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editInscription = async (
    inscriptionData: Inscription,
    id: string
): Promise<Inscription> => {
    try {
        const inscriptionRecordId = parseInt(id);
        return db.editInscription(inscriptionData, inscriptionRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteInscription = async (id: string): Promise<Inscription> => {
    try {
        const inscriptionRecordId = parseInt(id);
        return db.deleteInscription(inscriptionRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
