import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';

let squareStyle = {
    width: '50px',
    height: '50px',
    marginLeft: '3px',
    marginTop: '3px',
    backgroundColor: '#CAE8FF',
    border: 'black 1px solid',
    borderRadius: '5px',
    boxShadow: '0 6px #4279A5',
    transition: '100ms ease-in-out',
  }

let squareStyleActive = {
    width: '50px',
    height: '46px',
    marginLeft: '3px',
    marginTop: '3px',
    backgroundColor: 'orange',
    border: 'black 1px solid',
    borderRadius: '5px',
    transform: 'translateY(4px)',
    transition: '100ms ease-in-out',
    boxShadow: '0 6px #7E4D11'
  }

let currentPos = {
    width: '50px',
    height: '50px',
    marginLeft: '3px',
    marginTop: '3px',
    backgroundColor: 'yellow',
    border: 'black 1px solid',
    borderRadius: '5px',
    // transform: 'translateY(5px)',
    // transition: '100ms ease-in-out',
    boxShadow: '0 6px #666'
  }

  class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            id: this.props.id,
            row: this.props.row,
            position: this.props.position,
            beat: this.props.beat
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

        // console.log(this.props.beat)
        
        let currentStyle;
        if(this.props.position == 0 && this.state.id == 15 && this.props.playing == true){
            currentStyle = currentPos;
        }
        else if(this.props.position - 1 == this.state.id && this.props.playing == true){
            currentStyle = currentPos;
        }
        else if(this.state.status == "true"){
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

export default Square;