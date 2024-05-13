import Joi from "joi";

export const userValidator =
    Joi
        .object({
            username: Joi
                .string()
                .pattern(/w{4,}/)
                .required()
                // .message('default')
                .messages({
                    "string.pattern.base": "only words accepted",
                    "string.required.base": "username is required",

                }),
            age: Joi.number().min(0).max(100).required().messages({
                'number.min': 'min atatat',
                'number.max': 'max atatat'
            })
        })
