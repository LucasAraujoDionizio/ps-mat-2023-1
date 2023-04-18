import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <>
        <h1>Página de inicial</h1>
        <p>ir para a <Link to="/login">página de login</Link>.</p>
        </>
    )
}