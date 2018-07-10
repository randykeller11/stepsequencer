import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import Square from './square'


const gridStyle = {
    height: '50px',
    width: '50px'
}

let trackContainer = {
    float: 'left',
    margin: '1px',
    height: '50px'
  }

let trackNameContainer = {
    width: '50px',
    margin: '0px',
}



class PianoRoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pattern: this.props.pattern,
            osc: this.props.osc,
            steps: this.props.steps,
            position: this.props.position
        };
    
    }

    updatePattern = (id, status) => {
        console.log(id + " + " + status);
        status == "true" ? status = 1 : status = 0;
        this.state.pattern[id] = status;
        // console.log(this.state.pattern);
        // this.props.updatePattern(this.state.id, this.state.pattern)
    }

  render() {
    let rowArray = [];
    
    for (let i = 0; i < this.state.steps; i++) {

        let status;
        if(this.props.pattern[i] == "1"){
            status = "true";
        }
        else{
            status = "false";
        }

        rowArray.push(
        <div key={i} id={i} position={this.props.position} style={trackContainer}>
          <Square status={status} id={i} update={this.updatePattern}/>
        </div>
      );
    }

    
    return(
      <Fragment>
          <p> Piano Roll </p>
          {rowArray}
      </Fragment>
    );
  }
}

export default PianoRoll;