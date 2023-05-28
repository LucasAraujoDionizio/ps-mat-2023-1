import Joi from 'joi'

const EnumType = { TypeA: 'C', TypeB: 'O' };

const Tag = Joi.object({
    description: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'A descrição é obrigatória (entre 2 e 30 caracteres)'}),

       color: Joi.string()
       .min(2)
       .max(30)
       .required()
       .messages({'*': 'Cor é obrigatória (entre 2 e 30 caracteres)'}),

       type: Joi.string()
       .valid(...Object.values(EnumType))
       .required()
       .messages({'*': 'O tipo é obrigatório (entrada deve ser "O" ou "C")'}),

})

//permite campos não validados, como id, createdAt e updatedAt
.options({allowUnknown: true})

export default Tag 