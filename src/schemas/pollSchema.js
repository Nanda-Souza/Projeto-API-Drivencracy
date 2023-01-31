import joi from 'joi'
import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

export const pollSchema = joi.object({
    title: joi.string().required(),
    expireAt: Joi.date().format('YYYY-MM-DD HH:mm').allow("").required()
});