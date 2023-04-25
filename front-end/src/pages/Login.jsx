import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Backdrop } from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'


export default function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showWaiting, setShowWaiting] = React.useState(false)

  function handleChange(event) {
    if (event.target.name === 'email') setEmail(event.target.value)
    else setPassword(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()      // Impede o recarregamento da página
    setShowWaiting(true) //Mostra o spinner de espera
    try {
      let response = await fetch('http://localhost:3000/users/login', {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      const result = await response.json()
      console.log({result})

      //Grava o token recebido do localStorage 
      //problema sério de segurança 
    }
    catch(error) {
      console.error(error)
    }
    finally{
      setShowWaiting(false) //Esconde o spinner de esperaaaaaaaaaq
    }
  }

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        Autentique-se
      </Typography>

      <Paper sx={{
        width: '512px',
        maxWidth: '90%',
        margin: '25px auto 0 auto',
        p: '12px'
      }}>
        <Typography variant="h5" component="div">
          <form onSubmit={handleSubmit}>
            <TextField 
              id="email"
              className="form-field"
              name="email" 
              label="E-mail" 
              variant="filled"
              fullWidth
              onChange={handleChange}
              value={email}
            />
            <TextField 
              id="password"
              className="form-field"
              name="password" 
              label="Senha" 
              variant="filled"
              type="password"
              fullWidth
              onChange={handleChange}
              value={password}
            />
            <Button variant="contained" type="submit" color="secondary" fullWidth>
              Enviar
            </Button>            
          </form>
        </Typography>
      </Paper>
    </>
  )
}