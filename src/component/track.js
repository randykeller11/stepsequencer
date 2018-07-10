import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import Square from './square'

let trackContainer = {
  float: 'left',
  height: '50px'
}

let scrollContainer = {
}

let trackNameContainer = {
    width: '50px',
    margin: '0px',
}

let rowHeight = {
    height: '52px'
}

class Track extends Component {

    constructor(props) {
        super(props);
        this.state = {
            row: props.rowLength,
            pattern: this.props.pattern,
            trackName: this.props.trackName,
            id: this.props.id,
            position: this.props.position
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
          <Square status={status} id={i} update={this.updatePattern} position={this.props.position} beat={this.props.beat} playing={this.props.playing}/>
        </div>
      );
    }


    return(
        <Fragment>
        <div style={trackNameContainer}> <div>{this.state.trackName}</div>
        </div>
        {rowArray}
        </Fragment>
    );
  }
}

export default Track;