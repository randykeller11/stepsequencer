import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords'
import Tone from 'tone';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Piano />
        <Chords />
      </Fragment>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <button onClick={() => playExample()}>Play</button>
//       </div>
//     );
//   }
// }

export default App;
