import React from 'react';
import KnobClass from 'react-canvas-knob';
 
class Knob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 95,
      volume: this.props.volume
    };

}
 
  handleChange = (newValue) => {
    this.setState({value: newValue});
    this.props.update(this.state.value)
  };
 
  render() {
    return (
      <KnobClass
        value={this.state.value}
        onChange={this.handleChange}
        height={50}
        width={50}
      />
    );
  }
}

export default Knob;