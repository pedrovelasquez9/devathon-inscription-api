import {
    ValidationChain,
    checkSchema,
    validationResult
} from "express-validator";
import { Status } from "../utils/constants";
import {
    RunnableValidationChains,
    Schema
} from "express-validator/src/middlewares/schema";
import { NextFunction, Request, Response } from "express";

// id: number;
// fullname: string;
// email: string;
// github_link: string;
// linkedin_link: string;
// idrole: number;
// ceremony_available: number;
// discord_username: string;
// idseniority: number;
// looking_for_work: number;
// retire_probability: number;
// condition_accepted: number;
// idteam: number;
// status?: number;

const mainValidationSchema: Schema = {
    fullname: { trim: true, notEmpty: true, isString: true },
    email: { trim: true, isEmail: true, notEmpty: true, isString: true },
    github_link: { trim: true, notEmpty: true, isString: true },
    linkedin_link: { trim: true, notEmpty: true, isString: true },
    idrole: { trim: true, notEmpty: true, isNumeric: true },
    ceremony_available: { trim: true, notEmpty: true, isNumeric: true },
    discord_username: { trim: true, notEmpty: true, isString: true },
    idseniority: { trim: true, notEmpty: true, isNumeric: true },
    looking_for_work: { trim: true, notEmpty: true, isNumeric: true },
    retire_probability: { trim: true, notEmpty: true, isNumeric: true },
    condition_accepted: { trim: true, notEmpty: true, isNumeric: true },
    idteam: { trim: true, notEmpty: true, isNumeric: true },
    status: {
        trim: true,
        notEmpty: true,
        optional: true,
        isIn: { options: [Status.Active, Status.Inactive] }
    }
};

export const usePostValidatorRules =
    (): RunnableValidationChains<ValidationChain> => {
        return checkSchema(mainValidationSchema);
    };

export const usePatchValidatorRules =
    (): RunnableValidationChains<ValidationChain> => {
        const patchValidationSchema: Schema =
            structuredClone(mainValidationSchema);
        for (const key in patchValidationSchema) {
            patchValidationSchema[key] = {
                ...patchValidationSchema[key],
                optional: true
            };
        }

        return checkSchema(patchValidationSchema);
    };

export const validate = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const inscriptionValidationResult = validationResult(request);
    if (inscriptionValidationResult.isEmpty()) {
        next();
    } else {
        response.send(inscriptionValidationResult.array());
    }
};
