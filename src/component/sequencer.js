import React, { Component, Fragment } from 'react';
import Tone from 'tone';
import Track from './track'
import PianoRoll from './pianoNoteGrid'

let scrollContainer = {
    // overflowY : 'auto',
    marginLeft: '10px'
}

let numberDisplay = {
    width: '75px'
}

let controlBoard = {
    marginLeft: '200px',
    marginBottom: '10px',
    backgroundColor: 'gray',
    width: '500px'
}

let pianoGridStyle = {
    marginLeft: '30px'
}


class Sequencer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            test: "hey",
            bpm: 120,
            position: 0,
            playing: false,
            steps: 16,
            currentStep: 0,
            noteDivision: "8n",
            patternName: this.props.pattern.name,
            tracks: ["Kick", "Snare", "Hihat", "Clap"],
            pattern: this.props.pattern.events,
            noteList: ["A4", "B4", "C5", "D5", "E5", "F5", "G5"]
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
            if(this.state.currentStep >= this.state.steps){
                this.setState({currentStep: 0})
            }
            else{
                this.setState({currentStep: this.state.currentStep + 1})
            }
            
            console.log(this.state.currentStep);
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
        this.setState({currentStep: 0})
    }

    volumeRange = (event) => {
        console.log(this.kickVol.volume.value);
        Tone.Master.volume.value= event.currentTarget.value;
    }

    changePatternLength = () => {

    }

    render(){

        let trackArray = [];
        for(let i=0; i < this.props.pattern.events.length; i++){
            trackArray.push(
                <div className="row" key={i} track={i}>
                    <Track id={i} 
                           position={this.state.position} 
                           updatePattern={this.updateTrackPattern} 
                           trackName={this.state.tracks[i]} 
                           rowLength={this.state.steps} 
                           pattern={this.props.pattern.events[i]}/>
                </div>

            )
        }

        let pianoArray = [];

        for(let i=0; i < this.state.noteList.length; i++){
            pianoArray.push(
                <div className="row" key={i} track={i}>
                    <PianoRoll position={this.state.position} 
                           updatePattern={this.updatePianoRoll}  
                           steps={this.state.steps} 
                           pattern={this.props.pattern} />
                </div>

            )
        }




        return(
        <Fragment>
            <div className="row" style={controlBoard}>
                <button onClick={() => this.startLoop()}> Start </button>
                <button onClick={() => this.stopLoop()}> Stop </button>
                <div style={numberDisplay}>{this.state.position.toString().substring(7,0)}</div>
                <div style={numberDisplay}>{Tone.Transport.seconds.toString().substring(5,0)}</div>
                <input type="range" min="-60" max="3" onChange={this.volumeRange}></input>
            </div>

            <div className="row">
            <div className="trackContainer" style={scrollContainer}>
                {trackArray}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12" style={pianoGridStyle}>
                {pianoArray}
                </div>
            </div>
        </Fragment>
        )
    }
}

export default Sequencer;