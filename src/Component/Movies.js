import React from "react"
import {useGlobalConetxt} from "./Context"
import { Link } from "react-router-dom"
import "../App.css"
const url=
'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const Movies=()=>{
    const {Loading,movies}=useGlobalConetxt();
    if(Loading)
    {
        return <div className="loading"></div>
    }
    return  <section className="movies">
        {movies.map((items)=>{
            const {imdbID:id,Poster:poster,Year:year,Title:title}=items;
           return <Link to={`/movies/${id}`} key={id} className="movie">
               <article>
                   <img src={poster==="N/A" ? url:poster} alt={title}/>
                   <div className="movie-info">
                       <h4 className="title">{title}</h4>
                  <p>{year}</p>
                   </div>
                   </article>

           </Link>
        })}
        </section>
}
export default Movies