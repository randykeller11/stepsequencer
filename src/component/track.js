import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import Square from './square'

let trackContainer = {
  display: 'inline-block',
  margin: '0px 1px',
}

let trackNameContainer = {
    display: 'inline-block',
    width: '50px',
    margin: '0px 0px 15px 0px',
    // border: '1px solid'
}

class Track extends Component {

    constructor(props) {
        super(props);
        this.state = {
            row: props.rowLength,
            pattern: this.props.pattern,
            trackName: this.props.trackName,
            id: this.props.id
        };
    
        const tempPattern = this.props.pattern;
    
    }


    updatePattern = (id, status) => {
        console.log(id + " + " + status);
        status == "true" ? status = 1 : status = 0;
        this.state.pattern[id] = status;
        // console.log(this.state.pattern);
        this.props.updatePattern(this.state.id, this.state.pattern)
    }

  render() {
    let rowArray = [];
    for (let i = 0; i < this.state.row; i++) {

        let status;
        if(this.props.pattern[i] == "1"){
            status = "true";
        }
        else{
            status = "false";
        }

        rowArray.push(
        <div key={i} id={i} position={this.state.position} style={trackContainer}>
          <Square status={status} id={i} update={this.updatePattern}/>
        </div>
      );
    }


    return(
      <div>
        <div style={trackNameContainer}>
        <div onClick={() => this.updatePattern(rowArray)}>{this.state.trackName}</div>
        </div>
        {rowArray}
      </div>
    );
  }
}

export default Track;