import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import Square from './pianoSquare'


let trackContainer = {
    float: 'left',
    height: '60px',
    marginTop: '1px'
  }

let trackNameContainer = {
    width: '50px',
    height: '50px',
    marginTop: '10px',
}

let trackName = {
    color: 'white',
    paddingTop: '5px',
    marginLeft: '5px',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '22px'
}

class PianoRoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pattern: this.props.pattern,
            note: this.props.note,
            row: this.props.row,
            osc: this.props.osc,
            steps: this.props.steps
        };
    
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          pattern: nextProps.pattern
        });
      }

    updatePattern = (id, status) => {
        status == "true" ? status = 1 : status = 0;
        this.props.pattern[this.state.row][id] = status;
        this.props.updatePattern(this.state.id, this.props.pattern)
    }



  render() {

    let rowArray = [];
    for (let i = 0; i < this.props.steps; i++) {

        let status;
        if(this.props.pattern[this.props.row][i] == "1"){
            status = "true";
        }
        else{
            status = "false";
        }

        rowArray.push(
        <div key={i} id={i} position={this.state.position} style={trackContainer}>
          <Square status={status} id={i} update={this.updatePattern} position={this.props.position} playing={this.props.playing}/>
        </div>
      );
    }

    
    return(
      <Fragment>
          <div style={trackNameContainer}> <div style={trackName}>{this.state.note}</div>
        </div>
          {rowArray}
      </Fragment>
    );
  }
}

export default PianoRoll;