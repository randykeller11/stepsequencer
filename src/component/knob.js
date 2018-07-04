// import React from 'react';
// import {Knob} from 'react-rotary-knob';

// class Volume extends React.Component {
//     state = {
//       value: 0
//     };
  
//     changeValue(val) {
//       this.setState({ value: val });
//     }
  
//     render() {
//       return (
//         <div>
          
//           <h2>{this.state.value.toFixed(2)} </h2>
  
//           <Knob
//             style={{
//               width: "80px",
//               marginTop: "8rem",
//               marginLeft: "8rem",
//               height: "80px",
//               display: "inline-block"
//             }}
//             onChange={val => {
//               this.changeValue(val);
//             }}
//             min={0}
//             max={100}
//             value={this.state.value}
//           />
//         </div>
//       );
//     }
//   }

// export default Volume;

import React from 'react';
import KnobClass from 'react-canvas-knob';
 
class Knob extends React.Component {
  state = {value: 50};
 
  handleChange = (newValue) => {
    this.setState({value: newValue});
  };
 
  render() {
    return (
      <KnobClass
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Knob;