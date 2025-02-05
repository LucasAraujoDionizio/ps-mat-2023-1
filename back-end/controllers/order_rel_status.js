//Importar o model correspodente ao controller
const { OrderRelStatus,OrderStatus,User,Order } = require('../models')

const controller = {} //Objeto Vazio

/*
    Métodos CRUD do controller 
    Create: cria um novo registro
    retrive: lista(recupera) todos os registros
    retriveOne: lista(recupera) apenas um registro
    update: atualiza um registro
    delete: deleta um registro
*/

controller.create = async (req, res) => {
    try{
        await OrderRelStatus.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
    }
}

controller.retrieve = async(req, res) => {
    try{
        const data = await OrderRelStatus.findAll({
            include: [
                {model: Order, as: 'order'},
                {model: OrderStatus, as: 'order_status'},
                {model: User, as: 'user'}
        ]
    }) //findAll dá um select*
        //HTTP 200: OK (implícito)
        res.send(data)
    }
    catch(error){
        console.error(error)
    }
}

controller.retrieveOne = async (req, res) => {
    try{
        const data = await OrderRelStatus.findByPk(req.params.id)

        // HTTP 200: OK (implicito)
        if(data) res.send(data)

        // HTTP 200: OK (implicito)
        else res.status(404).end()        
    }
    catch(error){
        console.error(error)
    }    
}
controller.update = async (req, res) => {
    try{
       const response = await OrderRelStatus.update(
        req.body,
            { where: { id: req.params.id }}
       )
       
       //response retorna um vetor. O primeiro elemento do vetor indica quantos registros foram afetados pelo update
       if(response [0] > 0){
         //HTTP 204: No content
         res.status(204).end()
       }
       else { //Não encontrou o registro para atualizar 
         //HTTP 404: Not found
         res.status(404).end()
       }
    }
    catch(error){
        console.error(error)
    }
}
controller.delete = async (req,res)=>{
    try{
        const response = await OrderRelStatus.destroy(
            {where:{id:req.params.id}}
        )
        if(response){
            //encontrou e excluiu
            //http204: no content
            res.send(204).end()
        }
        else{//não encontrou e nao excluiu
            //http 404 not found
            res.status(404).end()

        }
    }
    catch(error){
        console.error(error)
    }
}

module.exports = controller