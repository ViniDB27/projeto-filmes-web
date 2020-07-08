import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';
import { searchUrl, topReatedUrl} from '../../utils/tmdbUtil'
import tmdb from '../../models/tmdb'
import StoreContext from '../Store/Context'
import api from '../../models/api'


function Mainbar({func, favorite, }){
    const { setToken } = useContext(StoreContext);
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState("")

    const toggle = () => setIsOpen(!isOpen);


    async function search(e){
        if(e)e.preventDefault()

        const btnClosePesq = document.getElementById('close-pesq')

        if(movie && !favorite){
            btnClosePesq.removeAttribute('hidden')
            const response = await tmdb.get(searchUrl(movie))
            func(response.data.results)
        }else if(movie && favorite){
            btnClosePesq.removeAttribute('hidden')
            const response = await tmdb.get(searchUrl(movie))
            func(response.data.results, false)
        } else if(!movie && favorite){
            btnClosePesq.setAttribute("hidden","hidden")
            const id = localStorage.getItem('userID')
            const response = await api.get(`/favorite?id=${id}`)
            func(response.data.movies, true)
        }else{
            btnClosePesq.setAttribute("hidden","hidden")
            const response = await tmdb.get(topReatedUrl())
            func(response.data.results)
        }
    }

    function closeSearch(){
        setMovie("")
        search()
    }

    return(
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><Link className="text-white" to="/">Início</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link className="text-white" to="/favorite" >Favoritos</Link></NavLink>
                    </NavItem>                   
                </Nav>
                <a hidden id="close-pesq" onClick={closeSearch} className="text-white"  >Fechar Pesquisa</a>
                <Form onSubmit={(e)=>{search(e)}}>
                    <FormGroup className="form-inline my-lg-2 mx-lg-5 my-lg-0" >
                        <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={movie} onChange={e=>{setMovie(e.target.value)}} />
                        <Button className="btn btn-light btn-outline-success  my-2 my-sm-0" type="submit" >Search</Button>
                    </FormGroup>
                </Form>
                </Collapse>
                <div className="mx-3">
                    <a onClick={() => setToken(null)} ><span class="material-icons text-white" title="Logout">exit_to_app</span></a>
                </div>
            </Navbar>
        </div>
    )
}

export default Mainbar