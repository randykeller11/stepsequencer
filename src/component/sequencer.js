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
            "url" : "./Kick.wav"
        }).toMaster();

        this.snare = new Tone.Player({
            "url" : "./Snare.wav"
        }).toMaster();

        this.hihat = new Tone.Player({
            "url" : "./Hihat.wav"
        }).toMaster();

        this.clap = new Tone.Player({
            "url" : "./Clap.wav"
        }).toMaster();

      }


    prepareEventGrid = () => {
        
        let kickLoop = new Tone.Sequence((time, note) => {
            console.log("kickloop");
            if(note == 1){
                this.kick.start();
            }
        }, this.props.pattern.events[0],"8n").start(0);

        let snareLoop = new Tone.Sequence((time, note) => {
            console.log("snareloop");
            if(note == 1){
                this.snare.start();
            }
        }, this.props.pattern.events[1],"8n").start(0);

        let hiHatLoop = new Tone.Sequence((time, note) => {
            console.log("snareloop");
            if(note == 1){
                this.hihat.start();
            }
        }, this.props.pattern.events[2],"8n").start(0);

        let clapLoop = new Tone.Sequence((time, note) => {
            console.log("snareloop");
            if(note == 1){
                this.clap.start();
            }
        }, this.props.pattern.events[3],"8n").start(0);

    }

    componentDidMount = () => {
        this.prepareEventGrid();
    }

    playSound = () => {
        this.snare.start();
    }

    startLoop = () => {        
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