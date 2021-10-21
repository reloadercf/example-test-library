import React from 'react'

export default function Form( {handleLogin} ) {
    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder= "email"  label="email" />
            <input type="password" placeholder= "password" />
            <button type="submit" >Iniciar Sesion</button>
        </form>
    )
}
