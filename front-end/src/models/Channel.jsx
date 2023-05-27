import Joi from 'joi'

const Channel = Joi.object({
    description: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'O nome é obrigatória (entre 2 e 30 caracteres)'}),

       comission_fee: Joi.number()//no meu banco também esta comission com apenas um 'M'
       .min(0)
       .max(30)
       .required()
       .messages({'*': 'A taxa de comissão é obrigatória (entre 0 e 30 caracteres)'}),
})

//permite campos não validados, como id, createdAt e updatedAt
.options({allowUnknown: true})

export default Channel 