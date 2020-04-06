import React, { Component,Fragment} from 'react'
import Modal from "react-modal"
import {editMovie} from "../js/actions/actions"
import {connect} from 'react-redux'



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


 class EditMovie extends Component {
    state={
        isOpen:false,
        editMovie: {name:this.props.movie.name,year:this.props.movie.year,rate:this.props.movie.rate,image:this.props.movie.image}
    }
    openModal = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    closeModal = () => {
        this.setState({isOpen:false})}

        hundleEditMovie = (e) => {
            e.preventDefault();
    
        if (Object.values(this.state.editMovie).indexOf("") === -1) {
          this.props.editMovie({...this.state.editMovie,id:this.props.id});
          this.setState({
            isOpen: false,
          });
        } else alert("Enter a valid info");
        }
    render() {
        const {editMovie}=this.state
        return (
            <Fragment>
                <button className="edit-btn" onClick={this.openModal} > Edit </button>
                <Modal isOpen={this.state.isOpen} style={customStyles} onRequestClose={this.closeModal}>
                <h3>Movie name</h3>
                    <input value={editMovie.name} type="text" placeholder="type the movie name" onChange={(e)=> this.setState({editMovie:{...this.state.editMovie,name:e.target.value}})} ></input>
                    <h3>Movie rate</h3>
                    <input value={editMovie.rate}type="number" max="5" placeholder="give it a rate " onChange={(e)=> this.setState({editMovie:{...this.state.editMovie,rate:e.target.value}})}></input>
                    <h3>year</h3>
                    <input value={editMovie.year}type="text" placeholder="type the year of release"onChange={(e)=> this.setState({editMovie:{...this.state.editMovie,year:e.target.value}})}></input>
                    <h3>picture</h3>
                    <input value={editMovie.image} type="url" placeholder="type the url of picture"onChange={(e)=> this.setState({editMovie:{...this.state.editMovie,image:e.target.value}})}></input>
                    <button type="submit" onClick={this.hundleEditMovie}> Edit</button>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>

            </Fragment>
                
        
        )
    }
}
export default connect(null,{editMovie}) (EditMovie)