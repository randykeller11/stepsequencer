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