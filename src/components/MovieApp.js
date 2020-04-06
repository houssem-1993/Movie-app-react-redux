import React, { Component,Fragment } from 'react'
import SearchMovie from './SearchMovie'
import MovieList from './MovieList'
import Loading from './Loading'
import { connect } from 'react-redux'
 

const MovieListwithLoading = Loading(MovieList);
 class MovieApp extends Component {
     state ={
         search:"",
         rating:1 ,
        loading:false
    }
    
        
     hundleSearch = (val) => this.setState({search:val})

     handleRating = rate => this.setState({ rating: rate })

    componentDidMount() {
       this.fakeLoading()
    }
    fakeLoading =() => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({loading:false});
            }, 5000);
    }
       
    

    render() {
        return (
            <Fragment>
                <SearchMovie hundleSearch={this.hundleSearch} rate={this.state.rating} handleRating={this.handleRating}/>
                
                <MovieListwithLoading
                    movieList={this.props.movieList.filter(el => el.rate>=this.state.rating && el.name.toLowerCase().includes(this.state.search.toLowerCase().trim()))} 
                
                    
                    isLoading={this.state.loading}
                />

            </Fragment>
        )
    }
  
}
const mapStateToProps=state => {
    return {movieList: state.movieReducer.movieList}
}
export default connect(mapStateToProps) (MovieApp)