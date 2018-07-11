import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords';
import Knob from './component/knob';
import Sequencer from './component/sequencer';
import PianoRoll from './component/pianoRoll'
import Tone from 'tone';

import { createStore } from "redux";

const reducer = (state, action) => {
  return state;
}

console.log ("Hey guys");

const initialState = {
  patternBank : [],
  songname : "Test Song",
  pattern1 : {name: "pattern1", 
              events: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],

              synthEvents:[{name: "track1",
                             settings: {
                             },
                             pattern:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
                           { name: "track2",
                             pattern:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
                          ]
    }
}

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is {store.getState().songname} </h1>
        <h1> File controls go here </h1>
        {/* <Piano /> */}
        <Sequencer pattern={store.getState().pattern1} />
      </Fragment>
    );
  }
}


export default App;
