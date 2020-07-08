import React, {useEffect, useState} from 'react'
import './favorite.css'
import api from '../../models/api'
import { imageUrl } from '../../utils/tmdbUtil'

//import components
import Navbar from '../../components/Navbar'
import CardMovie from '../../components/CardMovie'

function Favorite(){

    const [allMovies, setMovies] = useState([])
    const [favorite, setFavorite] = useState(true)

    useEffect(()=>{
        async function loadFavorites(){
            const id = localStorage.getItem('userID')
            const response = await api.get(`/favorite?id=${id}`)

            setMovies(response.data.movies)
        }
        
        loadFavorites()
    },[])
    
    function pesq(array, bool){
        setFavorite(bool)
        setMovies(array)
    }

    
    return(
        <>
          <Navbar func={(arr, bool)=>pesq(arr,bool)} favorite={true} /> 
          <div className="container-fluid my-2">
            <div className="row">
                <div className="col-12 mb-4 container-favorite">
                    {allMovies.map(movie=>(
                        <CardMovie image={(favorite)?movie.imageUrl:imageUrl(movie.backdrop_path)} title={movie.title} isFavorite={favorite} favoriteId={movie.id} />
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Favorite