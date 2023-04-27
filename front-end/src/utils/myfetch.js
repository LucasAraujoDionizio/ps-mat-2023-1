const myfetch = {} //objeto vazio

const baseUrl= 'http://localhost:3000'

function defaultOptions(body=null, method='GET'){
    const options = {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    if(body) options.body = JSON.stringify(body)

    //verifica se existe um token gravado no localStorage e o inclui
    //nos headers, nesse caso
    const token = widow.localStorage.getItem('token')

    if(token) options.headers.Authentication = `Bearer ${token}`

    return options
}

function getErrorDescription(response){
    switch(response.status){
        case 401: //Unauthorized
            return 'ERRO: usuário ou senha incorretos'
        default:
            return `ERRO: HTTP ${response.status}:${response.statusText}`
    }
}

myfetch.post = async function(path,body){
    const response = await fetch(baseUrl + path, dafaultOptions(body, 'POST'))
    if(response.ok) return response.json()
    else throw new Error(getErrorDescription(response))
}

export default myfetch