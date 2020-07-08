import React, {useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import api from '../../models/api'




function Register(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const Registrar = async (event)=>{

        event.preventDefault()
    
        const response = await api.post("/register",{
            email,
            password
        })
        
        if(response.data.status === 200){
            alert(response.data.message)
        }else(
            alert("Erro no cadastro tente novamento")
        )
    }

    return(
        <div className="register-container">
            <h3>Registrar-se</h3>
            <form onSubmit={e=>{Registrar(e)}} >
                <input type="email" placeholder="E-mail" value={email} onChange={e=>{setEmail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}} />
                <button type="submit">Cadastrar</button>
                <Link to="/login">Voltar para o login</Link>
            </form>
        </div>
    )
}

export default Register