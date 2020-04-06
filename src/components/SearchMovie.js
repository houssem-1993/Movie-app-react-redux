import React from 'react'
import StarRating from './StarRating'

 function SearchMovie(props) {
    return (
        <div className="Search-bar">
            <input type="text" placeholder="Search a Movie..." 
            onChange={(e)=> props.hundleSearch(e.target.value)} className="search-input" />
            <StarRating rate={props.rate} getRate={props.handleRating} />
        </div>
    )
}

export default SearchMovie