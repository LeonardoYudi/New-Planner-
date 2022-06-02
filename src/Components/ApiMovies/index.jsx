import { useState , useEffect} from "react";
import { APIKey } from "./key";
import { Link } from "react-router-dom";
import styled from 'styled-components'

function SectionMovies(){
    const [movies,setMovies] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
 
    useEffect(()=>{
        //consumir a API...
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return(
        <MovieList>
            {movies.map(movie =>{
                return(
                    <Movie>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}></img>
                        </Link>
                        <span>{movie.title}</span>
                    </Movie>
                )
            })}
        </MovieList>
    )

}

export default SectionMovies;



export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(190px,1vh));
    grid-template-rows: 350px;
    row-gap: 2rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;   
    
    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 100%;
        text-align: center;
    }
    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`
