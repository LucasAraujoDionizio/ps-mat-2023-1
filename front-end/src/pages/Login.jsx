import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Login() {
	return(
		<>
			<Typography variant="h3" component="h1" sx={{textAlign:'center'}}>
				Autentique-se
			</Typography>
			<Paper sx={{
				width:'512x',
				maxWidt: '80%',
				margin: '0 auto',
				p:'12px'
			}}>
				<Typography variant="h5" component="div">
					<form>
						<TextField 
							id="email"
							className="form-field"
							name="email"
							label="E-mail"
							variant="filled"
							fullWidth
						/>
						<TextField
							id="password"
							className="form-field"
							name="password"
							label="senha"
							variant="filled"
							type="password"
							fullWidth
						/>
						<Button variant="contained" type="submit" color="secondary" fullWidth>
							Enviar
						</Button>
					</form>
				</Typography>
				Aqui vão os campos para fazer Login
			</Paper>
		</>
	)	
}	