import React, {useState, useEffect} from 'react'
import tmdb from '../../models/tmdb'
import {topReatedUrl, imageUrl} from '../../utils/tmdbUtil'
import './home.css'

//import components
import Navbar from '../../components/Navbar'
import CardMovie from '../../components/CardMovie'


function Home(){
    const [allMovies, setMovies] = useState([])

    useEffect(()=>{
        async function loadMovies(){
            const response = await tmdb.get(topReatedUrl())
            setMovies(response.data.results)            
        }
        loadMovies()
        
    },[])

    
    function pesq(array){
        setMovies(array)
    }

    return(
        <>
          <Navbar func={arr=>pesq(arr)} /> 
          <div className="container-fluid my-2">
            <div className="row">
                <div className="col-12 mb-4 container-movies">
                    {allMovies.map(movie=>(
                         <CardMovie image={imageUrl(movie.backdrop_path)} title={movie.title} isFavorite={false} />
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Home