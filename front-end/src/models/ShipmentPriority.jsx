import Joi from 'joi'

const ShipmentPriority = Joi.object({
    description: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'A descrição é obrigatória patrão (entre 2 e 30 caracteres)'}),
})
//permite campos não validados, como id, createdAt e updatedAt
.options({allowUnknown: true})

export default ShipmentPriority