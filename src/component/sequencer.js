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

        this.kick = new Tone.Player({
            "url" : "http://freewavesamples.com/files/Bass-Drum-1.wav",
        }).toMaster();


      }


    componentDidMount = () => {
    }

    playSound = () => {
        this.kick.start();
    }

    startLoop = () => {
        var loop = new Tone.Sequence((time, note) => {
            console.log(note);
            if(note > 0){
                this.kick.start();
            }
        }, this.props.pattern.events,"8n").start(0);
        Tone.Transport.start();
    }

    stopLoop = () => {
        Tone.Transport.stop();
    }

    
    render(){
        return(
        <Fragment>
        <h1>{this.state.patternName}</h1>
        <button onClick={() => this.playSound()}> Kick </button>
        <button onClick={() => this.startLoop()}> Start </button>
        <button onClick={() => this.stopLoop()}> Stop </button>
        </Fragment>
        )
    }



}

export default Sequencer;