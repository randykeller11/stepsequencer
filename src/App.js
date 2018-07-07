import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords';
import Knob from './component/knob';
import Sequencer from './component/sequencer';
import Tone from 'tone';


const pattern1 = {name: "pattern1", events: [1,0,0,0]};

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Piano />
        <Chords />
        <Knob /> */}
        <Sequencer pattern={pattern1}/>
      </Fragment>
    );
  }
}


export default App;
