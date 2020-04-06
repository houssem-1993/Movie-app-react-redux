import React from 'react'
import StarRating from './StarRating'
import { connect } from 'react-redux'
import {hundleDelete} from '../js/actions/actions'
import EditMovie from './EditMovie'
import {Link} from 'react-router-dom'



 function MovieCard(props) {

    return (
        <div className="Movie-cards">
            <div className="card">
                <Link className="desc-link" to={`/description/${props.movie.id}`}>Desc </Link>
             <span><StarRating rate={props.movie.rate}/></span>
              <div className="poster" style={{
                backgroundImage:
                    `url('${props.movie.image}')`
                }}></div>
            <div className="description">
            <h3 className="movie-name">Movie Name: {props.movie.name}</h3>
            <div className="card-footer">
            <h5 className="movie-year"> Release date: {props.movie.year}</h5>
            <button className="delete-btn" onClick={()=>props.hundleDelete(props.movie.id)}>Delete</button>
            <EditMovie  id={props.movie.id} movie={props.movie} />
            </div>
            </div>
            </div>
            
        </div>
    )
}
export default connect (null,{hundleDelete})(MovieCard)