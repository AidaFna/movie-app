import axios from "axios";
// https://api.themoviedb.org/3/trending/movie/day?api_key=19b452a630ab0ea4e468d066eb910f25
export const fetchMovie = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=19b452a630ab0ea4e468d066eb910f25&language=en-US&page=1')
        .then((data)=>{
            console.log(data.data);
            dispatch(setMovie(data.data.results))
        })
        .catch(err=>{
            console.log(err.message);
        
        })
    }
}

export const setMovie = (payload) => {
    return{
        type: 'SET_POST', payload
    }
}
