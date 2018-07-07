import React, { Component, Fragment } from 'react';
import Tone from 'tone';
import Square from './square'

var soundSquareContainer = {
  display: 'inline-block',
  margin: '0px 2px'
}

class Track extends Component {
  render() {
    let rowArray = [];
    for (let i = 0; i < 7; i++) {
      rowArray.push(
        <div key={i} style={soundSquareContainer}>
          <Square />
        </div>
      );
    }
    return(
      <div>
        {rowArray}
      </div>
    );
  }
}

export default Track;