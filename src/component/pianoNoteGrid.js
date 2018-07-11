import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import Square from './pianoSquare'


const gridStyle = {
    height: '50px',
    width: '50px'
}

let trackContainer = {
    float: 'left',
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
        this.state.pattern[this.state.row][id] = status;
        this.props.updatePattern(this.state.id, this.state.pattern)
    }



  render() {

    // console.log("// state //")
    console.log(this.state.pattern);
    // console.log("// props //")
    // console.log(this.props.pattern);

    let rowArray = [];
    for (let i = 0; i < this.state.steps; i++) {

        let status;
        if(this.state.pattern[this.state.row][i] == "1"){
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
          <div style={trackNameContainer}> <div>{this.state.note}</div>
        </div>
          {rowArray}
      </Fragment>
    );
  }
}

export default PianoRoll;