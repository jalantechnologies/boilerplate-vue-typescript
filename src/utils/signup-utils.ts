import { ValidationFailure } from "@/models";

/**
 * @param validationFailures 
 * @param type 
 * @returns error message of type passed.
 */

export const getErrorMessage = (validationFailures: ValidationFailure[], type: string): ValidationFailure[] => {
    const validationFailure = validationFailures?.filter((element: ValidationFailure) => element.field == type);
    return validationFailure;
};
