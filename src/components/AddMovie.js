import React, { Component,Fragment} from 'react'
import Modal from "react-modal"
import {connect} from 'react-redux'
import {addMovie} from '../js/actions/actions'
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   
  Modal.setAppElement('#root')
 class AddMovie extends Component {
    state={
        isOpen:false,
        newMovie: {name:'',year:'',rate:'',image:''}
    }
    openModal = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    closeModal = () => {
        this.setState({isOpen:false})
    }
    hundleAdd = (e) => {
        this.setState({
            newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value }
          });
    }
    hundleAddMovie = (e) => {
        e.preventDefault();

    if (Object.values(this.state.newMovie).indexOf("") === -1) {
      this.props.addMovie(this.state.newMovie);
      this.setState({
        isOpen: false,
        newMovie: {
          name: "",
          year: "",
          image: "",
          rate: ""
        }
      });
    } else alert("Enter a valid info");
    }
    
    render() {
        return (
            <Fragment>
             <div className="add-movie" onClick={this.openModal}>add a new movie</div>
                <Modal style={customStyles} isOpen={this.state.isOpen} onRequestClose={this.closeModal}
>
                    <h3>Movie name</h3>
                    <input type="text" placeholder="type the movie name" onChange={(e)=> this.setState({newMovie:{...this.state.newMovie,name:e.target.value}})} ></input>
                    <h3>Movie rate</h3>
                    <input type="number" max="5" placeholder="give it a rate " onChange={(e)=> this.setState({newMovie:{...this.state.newMovie,rate:e.target.value}})}></input>
                    <h3>year</h3>
                    <input type="text" placeholder="type the year of release"onChange={(e)=> this.setState({newMovie:{...this.state.newMovie,year:e.target.value}})}></input>
                    <h3>picture</h3>
                    <input type="url" placeholder="type the url of picture"onChange={(e)=> this.setState({newMovie:{...this.state.newMovie,image:e.target.value}})}></input>
                    <button type="submit" onClick={this.hundleAddMovie}>Add movie</button>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>
            </Fragment>
        )
    }
}


export default connect(null,{addMovie}) (AddMovie)