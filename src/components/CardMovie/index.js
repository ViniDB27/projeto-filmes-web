import React, {useState} from 'react'
import './cardmovie.css'
import api from '../../models/api'

function CardMovie({image, title, isFavorite, favoriteId}){

    async function setFavorite(){

        if(!isFavorite){
            const userId = localStorage.getItem('userID')
    
            const response = await api.post('/favorite',{
                userId, 
                title, 
                image
            })

            if(response.data.status === 200){
                window.alert(response.data.message)
            }

        }else{

            const response = await api.delete(`/favorite?id=${favoriteId}`)
            window.location.reload()

        }
        
    }


    return( 
        <div className=" movie-container">
            <div className="image-box">
                <img className="img-fluid" src={image} alt={title}/>
            </div>
            <div className="title-box">
                <h1>{title}</h1>
            </div>
            <div className="favorite-box">
                <a onClick={setFavorite} title={(isFavorite)?"Remover Favorito":"Adcionar aos favoritos"}><span class="material-icons">{(isFavorite)?"highlight_off":"favorite"}</span></a>
            </div>
        </div>           
    )
}

export default CardMovie