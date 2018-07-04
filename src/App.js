import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords'
import Knob from './component/knob'
import Tone from 'tone';





class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Piano />
        <Chords /> */}
        <Knob />
      </Fragment>
    );
  }
}


export default App;
