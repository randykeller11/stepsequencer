import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';

let squareStyle = {
    width: '50px',
    height: '50px',
    border: 'black 1px solid',
    backgroundColor: 'green'
  }

let squareStyleActive = {
    width: '50px',
    height: '50px',
    border: 'black 1px solid',
    backgroundColor: 'orange'
  }

let currentPos = {
    width: '50px',
    height: '50px',
    backgroundColor: 'yellow'
  }

  class PianoSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            id: this.props.id,
            note: this.props.row,
            position: this.props.position
        };
    }

    
    handleClick = event => {
        if(this.state.status === "true"){
            this.setState({status: "false"});
            this.props.update(this.state.id, "false");
        }
        else{
            this.setState({status: "true"});
            this.props.update(this.state.id, "true");
        }    
    }

    render() {
        
        let currentStyle;
        if(this.state.status == "true"){
            currentStyle = squareStyleActive;
        }
        else{
            currentStyle = squareStyle;
        }


        return(
        <div status={this.state.status} style={currentStyle} onClick={this.handleClick}>
        </div>
      );
    }
  }

export default PianoSquare;