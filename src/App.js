import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords';
import Knob from './component/knob';
import Sequencer from './component/sequencer';
import Tone from 'tone';


const patternBank = [];
const songname = "Test Song";
const pattern1 = {name: "pattern1", events: [[1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0], [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]]};

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is {songname} </h1>
        {/* <Piano />
        <Chords />
        <Knob /> */}
        <Sequencer pattern={pattern1} />
      </Fragment>
    );
  }
}


export default App;
