import React, { Component, Fragment } from 'react';
import Tone from 'tone';
import Square from './square'

var trackContainer = {
  display: 'inline-block',
  margin: '5px 2px'
}

class Track extends Component {

    constructor(props) {
        super(props);
        this.state = {
            row: props.rowLength

        };
    }

  handleClick = event => {
    console.log(event.currentTarget.id);

  }

  render() {
    let rowArray = [];
    for (let i = 0; i < this.state.row; i++) {
      rowArray.push(
        <div key={i} id={i} onClick={this.handleClick} style={trackContainer}>
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