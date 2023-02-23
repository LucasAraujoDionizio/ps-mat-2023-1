//importar model corresponde ao controller
const {Users} = require('../models')

const controller = {} //obj vazio

/*
    Metodos CRUD do controller
    create cria um novo registro
    retrieve lista (recupera) todos os registros
    retrive one lista (recupera) apenas um registro
    update atualiza um registro
    delete exclui um registro
*/

controller.create = async(req,res) => {
    try{
        await User.create(req.body)
        //http 201: created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
    }
}

module.exports = controller