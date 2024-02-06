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

const mainValidationSchema: Schema = {
    name: { trim: true, notEmpty: true },
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
        patchValidationSchema.name = {
            ...patchValidationSchema.name,
            optional: true
        };

        return checkSchema(patchValidationSchema);
    };

export const validate = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const roleValidationResult = validationResult(request);
    if (roleValidationResult.isEmpty()) {
        next();
    } else {
        response.send(roleValidationResult.array());
    }
};
