import React, { Component, Fragment } from 'react';
import Tone from 'tone';



class Sequencer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            test: "hey",
            bpm: 120,
            position: 0,
            playing: false,
            steps: 8,
            patternName: this.props.pattern.name
        };
      }

    startLoop = () => {

        Tone.context = new AudioContext() 

        var synth1 = new Tone.Synth().toMaster()

        var loop = new Tone.Sequence(function(time, note){
            console.log(note);
            if(note > 0){
                console.log("*BAM*");
                synth1.triggerAttackRelease('C4', '16n')
            }
        }, this.props.pattern.events,"8n").start(0);
        Tone.Transport.start();
    }

    stopLoop = () => {
        Tone.context.close() 
        Tone.Transport.stop();
    }

    
    render(){
        return(
        <Fragment>
        <h1>{this.state.patternName}</h1>
        <button onClick={() => this.startLoop()}> Start </button>
        <button onClick={() => this.stopLoop()}> Stop </button>
        </Fragment>
        )
    }



}

export default Sequencer;