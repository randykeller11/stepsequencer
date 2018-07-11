import React, { Component, Fragment } from 'react';
import Tone from 'tone';
import Track from './track'
import PianoRoll from './pianoTrack'
import Knob from './knob'

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
    width: '600px'
}

let pianoGridStyle = {
    marginLeft: '0px',
    overflowX: 'auto'
}

let sliderStyle = {
    marginLeft: '5px',
    marginRight: '5px'
}

let knobStyle = {
    width: '50px',
    height: '50px'
}


class Sequencer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            test: "hey",
            bpm: 120,
            position: 0,
            playing: false,
            steps: 32,
            currentPattern: 0,
            currentStep: 0,
            noteDivision: "4n",
            volume: 0,
            patternName: this.props.pattern.name,
            tracks: ["Kick", "Snare", "Hihat", "O Hihat", "Clap", "Tom 1", "Tom 2", "Tom 3"],
            pattern: this.props.pattern.events,
            synthBank: this.props.pattern.synthEvents,
            currentSynthSelection: 1,
            currentSynthSettings: this.props.pattern.SynthEvents,
            noteList: [["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
                       ["A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"],
                       ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6"],
                       ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
        ],
            synthlist: [],
            oscillatorSettings: {type: "triangle"}
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

        this.chorus = new Tone.Chorus(4, 2.5, 0.5);

        this.positionLoop;
        this.kickLoop;
        this.snareLoop;
        this.hiHatLoop;
        this.clapLoop;
        this.synth = Tone.Synth;
        this.synth1 = new Tone.PolySynth(14, Tone.Synth, {
                "oscillator" : this.state.oscillatorSettings}).connect(this.chorus).toMaster(),
        this.synth2 = new Tone.PolySynth(14, Tone.Synth, {
                "oscillator" : this.state.oscillatorSettings}).connect(this.chorus).toMaster()

      }


    prepareEventGrid = () => {

        //need to make this dynamic
        this.positionLoop = new Tone.Sequence((time, note) => {
            if(this.state.currentStep > this.state.steps - 2){
                this.setState({currentStep: 0})
            }
            else{
                this.setState({currentStep: this.state.currentStep + 1})
            }
        
            // console.log(this.state.currentStep + " is the top level current step");
            this.setState({position: Tone.Transport.position})


        }, this.state.pattern[0], this.state.noteDivision).start(0);
        
        this.kickLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.kick.start();
            }
            else if(note == 2){
                this.kick.start();
                setTimeout(() => this.kick.start, 100);

            }
        }, this.state.pattern[0], this.state.noteDivision).start(0);

        this.snareLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.snare.start();
            }
            else if(note == 2){
                this.snare.start();
                setTimeout(() => 
                    this.snare.start, 200);

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

    preparePianoGrid = (synth, pattern) => {

        //SYNTH 1
        this.synthLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][0]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[0], this.state.noteDivision).start(0);

        this.synthLoop1 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][1]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[1], this.state.noteDivision).start(0);

        this.synthLoop2 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][2]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[2], this.state.noteDivision).start(0);

        this.synthLoop3 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][3]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[3], this.state.noteDivision).start(0);

        this.synthLoop4 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][4]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[4], this.state.noteDivision).start(0);

        this.synthLoop5 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][5]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[5], this.state.noteDivision).start(0);

        this.synthLoop6 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][6]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[6], this.state.noteDivision).start(0);

        this.synthLoop7 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][7]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[7], this.state.noteDivision).start(0);

        this.synthLoop8 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][8]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[8], this.state.noteDivision).start(0);

        this.synthLoop9 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][9]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[9], this.state.noteDivision).start(0);

        this.synthLoop10 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][10]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[10], this.state.noteDivision).start(0);

        this.synthLoop11 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][11]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[11], this.state.noteDivision).start(0);

        this.synthLoop12 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][12]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[12], this.state.noteDivision).start(0);

        this.synthLoop13 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[0][13]], '4n');
            }
            
        }, this.state.synthBank[0].pattern[13], this.state.noteDivision).start(0);

        //SYNTH TWO//
        //         //
        //         //
        /////////////

        this.synth1Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][0]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[0], this.state.noteDivision).start(0);

        this.synth1Loop1 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][1]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[1], this.state.noteDivision).start(0);

        this.synth1Loop2 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][2]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[2], this.state.noteDivision).start(0);

        this.synth1Loop3 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][3]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[3], this.state.noteDivision).start(0);

        this.synth1Loop4 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][4]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[4], this.state.noteDivision).start(0);

        this.synth1Loop5 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][5]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[5], this.state.noteDivision).start(0);

        this.synth1Loop6 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][6]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[6], this.state.noteDivision).start(0);

        this.synth1Loop7 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][7]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[7], this.state.noteDivision).start(0);

        this.synth1Loop8 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][8]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[8], this.state.noteDivision).start(0);

        this.synth1Loop9 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][9]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[9], this.state.noteDivision).start(0);

        this.synth1Loop10 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][10]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[10], this.state.noteDivision).start(0);

        this.synth1Loop11 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][11]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[11], this.state.noteDivision).start(0);

        this.synth1Loop12 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][12]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[12], this.state.noteDivision).start(0);

        this.synth1Loop13 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth1.triggerAttackRelease([this.state.noteList[1][13]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[13], this.state.noteDivision).start(0);

    }

    preparePianoGridDynamic = (synth, voice, pattern, time, note) => {
        let trackName = "track" + synth + voice.toString();
        console.log(trackName);
    } 

    changePatternLength = () => {
        // // this.preparePianoGridDynamic(1, 0, 0, '4n')
        // if(this.state.currentSynthSelection == 1){
        //     this.setState({currentSynthSelection: 0});
        // }
        // else{
        //     this.setState({currentSynthSelection: 1});
        // }

        // this.setState({steps: 32})

        console.log(this.state.pattern);

        // console.log(this.state.synthBank[this.state.currentSynthSelection].pattern);
    }

    addPatternLength = () => {
        // console.log(this.state.pattern);

        for(let i=0; i < this.state.pattern.length; i++){
            for(let j=this.state.pattern[i].length; j < this.state.steps; j++){
                this.state.pattern[i].push(0)
            }

        }
    }

    componentDidMount = () => {
        this.prepareEventGrid();
        this.preparePianoGrid();
    }

    updateTrackPattern = (track, pattern) => {
        this.positionLoop.dispose();
        this.kickLoop.dispose();
        this.snareLoop.dispose();
        this.hiHatLoop.dispose();
        this.clapLoop.dispose();

        this.prepareEventGrid();
    }

    updatePianoRoll = (track, pattern) => {

        // console.log(this.state.synthBank[0].pattern);
        this.synthLoop.dispose();
        this.synthLoop1.dispose();
        this.synthLoop2.dispose();
        this.synthLoop3.dispose();
        this.synthLoop4.dispose();
        this.synthLoop5.dispose();
        this.synthLoop6.dispose();
        this.synthLoop7.dispose();
        this.synthLoop8.dispose();
        this.synthLoop9.dispose();
        this.synthLoop10.dispose();
        this.synthLoop11.dispose();
        this.synthLoop12.dispose();
        this.synthLoop13.dispose();

        this.synth1Loop.dispose();
        this.synth1Loop1.dispose();
        this.synth1Loop2.dispose();
        this.synth1Loop3.dispose();
        this.synth1Loop4.dispose();
        this.synth1Loop5.dispose();
        this.synth1Loop6.dispose();
        this.synth1Loop7.dispose();
        this.synth1Loop8.dispose();
        this.synth1Loop9.dispose();
        this.synth1Loop10.dispose();
        this.synth1Loop11.dispose();
        this.synth1Loop12.dispose();
        this.synth1Loop13.dispose();

        // for(let i=1; i < this.state.noteList[0].length; i++){

        //     let trackDispose = "synthLoop" + i;
        //     console.log(trackDispose);
        //     this.trackDispose.dispose();
        // }

        this.preparePianoGrid();
    }

    playSound = () => {
        this.kick.start();
    }

    startLoop = () => {        
        Tone.Transport.start();
        this.setState({playing: true});
    }

    stopLoop = () => {
        Tone.Transport.stop();
        this.setState({currentStep: 0})
        this.setState({playing: false})
    }

    volumeRange = (event) => {
        console.log(this.kickVol.volume.value);
        Tone.Master.volume.value= event.currentTarget.value;
        this.setState({volume: event.currentTarget.value })
    }

    volumeKnob = (volume) => {
        Tone.Master.volume.value= volume - 95;
        this.setState({volume: volume - 95})
    }

    bpmKnob = (BPM) => {
        Tone.Transport.bpm.value = BPM;
        this.setState({bpm: Math.floor(Tone.Transport.bpm.value)})

    }

    changeBPM = (event) => {
        Tone.Transport.bpm.value = event.currentTarget.value;
        this.setState({bpm: Math.floor(Tone.Transport.bpm.value)})
    }

    getVolume = () => {

    }

    render(){

        // console.log(this.state.currentSynthSelection);


        let trackArray = [];
        for(let i=0; i < this.props.pattern.events.length; i++){
            trackArray.push(
                <div className="row" key={i} track={i}>
                    <Track id={i} 
                           position={this.state.currentStep}
                           beat={this.state.position}
                           updatePattern={this.updateTrackPattern} 
                           trackName={this.state.tracks[i]} 
                           rowLength={this.state.steps} 
                           pattern={this.state.pattern[i]}
                           playing={this.state.playing}/>
                </div>

            )
        }

        let pianoArray = [];

        for(let i=0; i < this.state.noteList[0].length; i++){
            // console.log(this.state.currentSynthSelection + "is the selection");
            pianoArray.push(
                <div className="row" key={i} track={i}>
                    <PianoRoll position={this.state.currentStep} 
                           updatePattern={this.updatePianoRoll}
                           note={this.state.noteList[this.state.currentSynthSelection][i]}  
                           steps={this.state.steps} 
                           pattern={this.state.synthBank[this.state.currentSynthSelection].pattern}
                           row={i} 
                           playing={this.state.playing} />
                </div>
            )
        }

        return(
        <Fragment>
            <div className="row" style={controlBoard}>
                <button onClick={() => this.startLoop()}> Start </button>
                <button onClick={() => this.stopLoop()}> Stop </button>
                <div style={numberDisplay}>{this.state.position.toString().substring(8,0)}</div>
                <div style={numberDisplay}>{Math.floor(Tone.Transport.seconds * 100) / 100}</div>
                {/* <input type="range" min="-60" max="5" defaultValue="0" style={sliderStyle} onChange={this.volumeRange}></input> */}
                <Knob update={this.volumeKnob} volume={this.state.volume} />
                <p>BPM: {this.state.bpm} </p>
                <input type="range" width="25" height="50" min="40" max="200" defaultValue="120" onChange={this.changeBPM} style={sliderStyle}></input>
            </div>

            <div className="row">
            <div className="trackContainer" style={scrollContainer}>
                {trackArray}
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
                        Oscillator Control Stuff and the current Synth is {this.state.currentSynthSelection};
            </div>
            </div>
            <div className="row">
                <div className="col-lg-12" style={pianoGridStyle}>
                {pianoArray}
                </div>
            </div>
            <button onClick={this.changePatternLength}>Function test #1</button>
            <button onClick={this.addPatternLength}>Function test #1</button>
        </Fragment>
        )
    }
}

export default Sequencer;