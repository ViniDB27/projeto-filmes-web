export function imageUrl(imgPath){
    return `https://image.tmdb.org/t/p/original${imgPath}` 
}

export function apiKey(){
    return 'cd293c469996f01d170e6b1ca07ecc66'
}

export function topReatedUrl(){
    return `/3/movie/top_rated?api_key=${apiKey()}&language=pt-BR&page=1`
}

export function searchUrl(search){
    return `/3/search/movie?api_key=cd293c469996f01d170e6b1ca07ecc66&language=pt-BR&query=${search}&page=1&include_adult=false`
}