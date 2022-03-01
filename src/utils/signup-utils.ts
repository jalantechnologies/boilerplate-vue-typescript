import { ValidationFailure } from "@/models";
import { CreateAccountParam, LooseObject } from "@/types";
import { email, helpers, minLength, required, sameAs } from "@vuelidate/validators";
import zxcvbn from "zxcvbn";

/**
 * @param validationFailures 
 * @param type 
 * @returns error message of type passed.
 */

export const getErrorMessage = (validationFailures: ValidationFailure[], type: string): string[] => {
  const validationFailure = validationFailures?.filter((element: ValidationFailure) => element.field == type)?.map((e) => e.message);
  return validationFailure;
};

/**
 * @param value 
 * @returns string
 */

export const getPasswordStrength = (value: string): string => {
  switch (zxcvbn(value).score) {
    case 0:
      return 'weak';
    case 1:
      return 'weak';
    case 2:
      return 'medium';
    case 3:
      return 'medium';
    case 4:
      return 'strong';
  }
}

/**
 * @param user 
 * @returns 
 */

export const validationRules = (user: CreateAccountParam): LooseObject => {
  const rules = {
    user: {
      username: {
        required: helpers.withMessage('Username field is required.', required),
        email: helpers.withMessage('Please enter a valid email address.', email),
      },
      password: {
        required: helpers.withMessage('Password field is required.', required),
        minLength: helpers.withMessage('Password should be at least 6 characters long.', minLength(6))
      },
      confirmPassword: {
        required: helpers.withMessage('Confirm Password field is required.', required),
        minLength: helpers.withMessage('Confirm Password should be at least 6 characters long.', minLength(6)),
        sameAsPassword: helpers.withMessage('Confirm Password must be same as Password field.', sameAs(user.password)),
      },
    }
  }
  return rules;
}
