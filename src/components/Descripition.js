import React, { Component } from 'react'
import {connect} from 'react-redux'
import StarRating from './StarRating'
import {Link} from 'react-router-dom'
class Descripition extends Component {
    render() {
        console.log(this.props.match.params.id)
        const currentMovie=this.props.movieList.find(el => el.id===this.props.match.params.id) 
        return (
            <div className="movie-desc">
            
              <StarRating value={currentMovie.rate} rate={currentMovie.rate} />  
              <h1>{currentMovie.name}</h1>
              <h1>{currentMovie.year}</h1>
              <img src={currentMovie.image} className="movie-desc-img"></img>
              <Link to={`/`}>Home</Link>

              
              
               

            </div>
        )
    }
}
const mapStateToProps =state =>{
    return{
        movieList:state.movieReducer.movieList
    }
}
export default connect(mapStateToProps) (Descripition)