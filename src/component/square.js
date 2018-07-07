import React, { Component, Fragment } from 'react';
import Tone from 'tone';

var squareStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: 'blue'
  }

  class Square extends Component {
    render() {
      return(
        <div style={squareStyle}>
        </div>
      );
    }
  }

export default Square;