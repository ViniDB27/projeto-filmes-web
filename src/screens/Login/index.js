import React, {useState, useContext} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import api from '../../models/api'
import StoreContext from '../../components/Store/Context'
import { useHistory } from 'react-router-dom'

function Login(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    async function Logar(event) {
        event.preventDefault();
    
        const response = await api.post('/login',{
            email,
            password
        })

        let token = response.data.token
    
        if (token) {
            setToken(token);
            localStorage.setItem('userID',response.data.userId)
            return history.push('/');
        }else{
            alert("Usuário não existe")
        }
    
    }


    return(
        <div className="login-container">
            <h3>Login</h3>
            <form onSubmit={Logar}>
                <input type="email" placeholder="E-mail" value={email} onChange={e=>{setEmail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}}  />
                <button type="submit">Entrat</button>
                <Link to="/register">Me cadastrar</Link>
            </form>
        </div>
    )
}

export default Login