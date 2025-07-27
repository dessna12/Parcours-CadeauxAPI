const Joi = require('joi');

//TODO: completer ici le schema
const giftSchema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().max(500).optional(),
    price: Joi.number().positive().required(),
    reserved: Joi.number().valid(0,1).default(0)
});

module.exports = giftSchema;
