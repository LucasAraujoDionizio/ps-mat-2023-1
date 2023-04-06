const jwt = require ('jsonwebtoken')

module.exports = (req,res,next)=>{

    //É necessário ter o token parar continuar
    const bearerHeader = req.headers['authorization']

    //O token não foi passado ~> HTTP 403: Forbidden
    if(!bearerHeader) return res.status(403).end()

    //Extrai o token de dentro do cabeçalho "authorization"
    const temp = bearerHeader.split(' ')
    const token = temp[1]

    //validando o token
    jwt.verify(token, process.env.TOKEN_SECRET,(error,decoded)=>{
        
        //token inválido ou expirado -> HTTP403 : Forbidden
        if(error) return res.status(403).end()

        //Se chegarmos até aqui, o token está OK e temos as informações do
        //usuário logado no parâmetro "decoded". Vamos guardar isso na
        //request para usar depois
        req.authUser = decoded

        console.log({authUser: req.authUser})

        next()
    })
}