import { Team, TeamData } from "../types/Team";
import { Status } from "../utils/constants";
import * as db from "../db/team";

export const getAllTeams = async (): Promise<TeamData[]> => {
    try {
        return db.getAllTeams();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getTeamByID = async (id: string): Promise<TeamData | null> => {
    try {
        const teamRecordId = parseInt(id);
        return db.getTeamByID(teamRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createTeam = async (teamData: Team): Promise<Team> => {
    try {
        return db.createTeam(teamData);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editTeam = async (teamData: Team, id: string): Promise<Team> => {
    try {
        const recordId = parseInt(id);
        return db.editTeam(teamData, recordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteTeam = async (id: string): Promise<Team> => {
    try {
        const teamRecordId = parseInt(id);
        return db.deleteTeam(teamRecordId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
