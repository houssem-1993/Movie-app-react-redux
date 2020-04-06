import React from 'react'
import MovieCard from'./MovieCard'
import AddMovie from './AddMovie'
import Loading from './Loading'

 function MovieList(props) {
    return (
        <div className="movie-list">
            {props.movieList.map(el=> <MovieCard movie={el} key={el.id} />)}
            <AddMovie/>
            {/* <Loading/> */}
        </div>
    )
}

export default MovieList