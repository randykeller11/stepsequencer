import React, { Component, Fragment } from 'react';
import Tone from 'tone';

import Track from './track'

class Sequencer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            test: "hey",
            bpm: 120,
            position: 0,
            playing: false,
            steps: 16,
            patternName: this.props.pattern.name,
            tracks: ["Kick", "Snare", "Hihat", "Clap"]
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

        let positionLoop = new Tone.Sequence((time, note) => {
            console.log(this.state.position);
            if(this.state.position >= this.state.steps){
                this.setState({position: 0})
            }
            else{
                this.setState({position: this.state.position + 1});
            }

        }, this.props.pattern.events[0],"8n").start(0);
        
        let kickLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.kick.start();
            }
        }, this.props.pattern.events[0],"8n").start(0);

        let snareLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.snare.start();
            }
        }, this.props.pattern.events[1],"8n").start(0);

        let hiHatLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.hihat.start();
            }
        }, this.props.pattern.events[2],"8n").start(0);

        let clapLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.clap.start();
            }
        }, this.props.pattern.events[3],"8n").start(0);

    }

    componentDidMount = () => {
        this.prepareEventGrid();
    }

    playSound = () => {
        this.kick.start();
    }

    startLoop = () => {        
        Tone.Transport.start();
    }

    stopLoop = () => {
        Tone.Transport.stop();
        this.setState({position: 0})
    }

    render(){

        let trackArray = [];
        for(let i=0; i < this.props.pattern.events.length; i++){
            trackArray.push(
                <div key={i} track={i}>
                    <Track position={this.state.position} trackName={this.state.tracks[i]} rowLength={this.state.steps} pattern={this.props.pattern.events[i]}/>
                </div>

            )
        }

        return(
        <Fragment>
            <button onClick={() => this.playSound()}> Kick </button>
            <button onClick={() => this.startLoop()}> Start </button>
            <button onClick={() => this.stopLoop()}> Stop </button>
            <div>
            {trackArray}
            </div>
        </Fragment>
        )
    }
}

export default Sequencer;