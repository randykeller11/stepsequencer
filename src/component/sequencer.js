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
            noteDivision: "8n",
            patternName: this.props.pattern.name,
            tracks: ["Kick", "Snare", "Hihat", "Clap"],
            pattern: this.props.pattern.events
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

        this.kickVol = new Tone.PanVol();
        this.kick.chain(this.kickVol, Tone.Master);

        this.hihatVol = new Tone.PanVol();
        this.hihat.chain(this.hihatVol, Tone.Master);

        this.positionLoop;
        this.kickLoop;
        this.snareLoop;
        this.hiHatLoop;
        this.clapLoop;

      }


    prepareEventGrid = () => {

        this.positionLoop = new Tone.Sequence((time, note) => {
            console.log(Tone.Transport.position);
            this.setState({position: Tone.Transport.position})
        }, this.state.pattern[0], this.state.noteDivision).start(0);
        
        this.kickLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.kick.start();
            }
        }, this.state.pattern[0], this.state.noteDivision).start(0);

        this.snareLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.snare.start();
            }
        }, this.state.pattern[1], this.state.noteDivision).start(0);

        this.hiHatLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.hihat.start();
            }
        }, this.state.pattern[2], this.state.noteDivision).start(0);

        this.clapLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.clap.start();
            }
        }, this.state.pattern[3], this.state.noteDivision).start(0);

    }

    componentDidMount = () => {
        this.prepareEventGrid();
    }

    updateTrackPattern = (track, pattern) => {
        console.log(track + " is the track " + this.state.pattern[track]);
        this.positionLoop.dispose();
        this.kickLoop.dispose();
        this.snareLoop.dispose();
        this.hiHatLoop.dispose();
        this.clapLoop.dispose();

        this.prepareEventGrid();
    }

    playSound = () => {
        this.kick.start();
    }

    startLoop = () => {        
        Tone.Transport.bpm.value = 140;
        Tone.Transport.start();
    }

    stopLoop = () => {
        Tone.Transport.stop();
        this.setState({position: 0})
    }

    volumeRange = (event) => {
        console.log(this.kickVol.volume.value);
        this.hihatVol.volume.value = event.currentTarget.value;
    }

    render(){

        let trackArray = [];
        for(let i=0; i < this.props.pattern.events.length; i++){
            trackArray.push(
                <div key={i} track={i}>
                    <Track id={i} 
                           position={this.state.position} 
                           updatePattern={this.updateTrackPattern} 
                           trackName={this.state.tracks[i]} 
                           rowLength={this.state.steps} 
                           pattern={this.props.pattern.events[i]}/>
                </div>

            )
        }

        return(
        <Fragment>
            <button onClick={() => this.playSound()}> Kick </button>
            <button onClick={() => this.startLoop()}> Start </button>
            <button onClick={() => this.stopLoop()}> Stop </button>
            <p>{this.state.position.toString().substring(7,0)}</p>
            <p>{Tone.Transport.seconds.toString().substring(5,0)}</p>
            <input type="range" min="-10000" max="0" onChange={this.volumeRange}></input>
            <div>
            {trackArray}
            </div>
        </Fragment>
        )
    }
}

export default Sequencer;