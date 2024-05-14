import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi
        .number()
        .min(1)
        .max(10)
        .messages({
            'number.required': 'userId cannot be empty',
            'number.min': 'userId cannot be less than 1',
            'number.max': 'userId cannot be more than 10'
        })
        .required(),
    title: Joi
        .string()
        .messages({'string.required': 'title cannot be empty'})
        .required(),
    body: Joi
        .string()
        .messages({'string.required': 'body cannot be empty'})
        .required()
})