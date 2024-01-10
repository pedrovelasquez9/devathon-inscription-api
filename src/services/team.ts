import prisma from "../client";
import { Team, TeamData } from "../interfaces/Team";
import { Status } from "../utils/constants";

const prismaTeamModel = prisma.team;
const teamResultFields = {
    id: true,
    name: true,
    stack_backend: true,
    stack_frontend: true,
    available_backend_quota: true,
    available_frontend_quota: true,
    edition: true,
};

export const getAllTeams = async (): Promise<TeamData[]> => {
    try {
        return await prismaTeamModel.findMany({
            where: { status: Status.Active },
            select: teamResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getTeamByID = async (id: string): Promise<TeamData | null> => {
    try {
        const teamRecordId = parseInt(id);
        return await prismaTeamModel.findUnique({
            where: {
                id: teamRecordId,
                status: Status.Active,
            },
            select: teamResultFields,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createTeam = async (teamData: Team): Promise<Team> => {
    try {
        return await prismaTeamModel.create({
            data: teamData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editTeam = async (teamData: Team, id: string): Promise<Team> => {
    try {
        const recordId = parseInt(id);
        return await prismaTeamModel.update({
            where: {
                id: recordId,
            },
            data: teamData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteTeam = async (id: string): Promise<Team> => {
    try {
        const teamRecordId = parseInt(id);
        return await prismaTeamModel.update({
            where: {
                id: teamRecordId,
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
