import React, { Component, Fragment } from 'react';
import Tone from 'tone';
import Track from './track'
import PianoRoll from './pianoTrack'
import Knob from './knob'
import Slider from 'react-rangeslider'
import Vertical from './vertical'

let scrollContainer = {
    // overflowY : 'auto',
    marginLeft: '10px',
    paddingLeft: '35px',
    paddingRight: '50px',
    paddingBottom: '10px',
    paddingTop: '10px',
    borderRadius: '10px 10px 25px 25px',
    backgroundColor: '#223559',
    boxShadow: '15px 10px 13px -5px rgba(0,0,0,0.60)',
    minWidth: '900px',
    border: '1px solid black'
    
}

let numberDisplay = {
    float: 'left',
    width: '75px',
    color: 'white',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '22px',
    marginLeft: '15px',
    marginTop: '5px',
    border: '3px solid white',
    borderRadius: '3px'
}

let controlBoard = {
    marginLeft: '150px',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: '#223559',
    width: '700px',
    height: '100px',
    borderRadius: '10px',
    border: '1px solid black'
}

let controlBoardSynth = {
    marginLeft: '100px',
    marginBottom: '10px',
    backgroundColor: '#223559',
    width: '800px',
    height: '115px',
    boxShadow: '15px 10px 13px -5px rgba(0,0,0,0.60)',
    borderRadius: '10px',
    border: '1px solid black'
}

let synthNameContainer = {

}

let pianoGridStyle = {
    marginLeft: '0px',
    overflowX: 'auto'
}

let sliderStyle = {
    width: '120px',
}

let knobStyle = {
    width: '50px',
    height: '50px'
}

let waveformStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'green',
    marginTop: '2px',
    marginLeft: '3px',
    border: '1px solid black',
    borderRadius: '5px',
    boxShadow: '0 6px #999',
    cursor: 'pointer'
}

let waveformStyleActive = {
    width: '50px',
    height: '50px',
    backgroundColor: 'orange',
    marginTop: '2px',
    marginLeft: '3px',
    border: '1px solid black',
    transform: 'translateY(3px)',
    transition: '150ms ease-in-out',
    borderRadius: '5px',
    boxShadow: '0 3px #666',
    cursor: 'pointer'
}


let waveformStyleBox = {
    marginTop: '5px',
    marginLeft: '0px',
    marginRight: '25px'
}

let imageContainer = {
    width: '50px',
    height: '50px'
}

let effectsContainer = {
    marginLeft: '150px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: 'gray',
    width: '600px',
    height: '75px'
}

let synthSelectionContainer = {
    marginLeft: '150px',
    marginTop: '5px',
    marginBottom: '5px',
    backgroundColor: 'gray',
    width: '600px',
    height: '75px'
}

let trackNameDisplay = {

}

let nameStyle ={
    margin: 'auto',
    width: '225px',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '20px',
    color: 'white'
}

let synthSelectionButton = {
    height: '30px',
    backgroundColor: 'green',
    marginTop: '10px',
    marginLeft: '3px',
    borderRadius: '5px',
    color: 'white',
    textShadow: '2px 2px #41464B',
    border: '1px solid black',
    boxShadow: '0 6px #999',
    cursor: 'pointer'
}

let synthSelectionButtonActive = {
    backgroundColor: 'orange',
    height: '30px',
    marginTop: '10px',
    marginLeft: '3px',
    transform: 'translateY(3px)',
    transition: '150ms ease-in-out',
    textShadow: '2px 2px #41464B',
    borderRadius: '5px',
    border: '1px solid black',
    boxShadow: '0 3px #666',
    color: 'white',
    cursor: 'pointer'

}

let synthControlContainer = {
    marginTop: '5px',
    marginLeft: '5px',
    paddingLeft: '5px',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '20px',
    borderRadius: '5px',
    // backgroundColor: '#525354',
    width: '22%',
    height: '100px'
}

let synthPadding = {
    paddingLeft: '19px'
}

let appPosition = {
    width: '1000px',
    margin: 'auto'
}

let appPosition32 = {
    width: '1800px',
    margin: 'auto'
}

let startButton = {
    float: 'left',
    width: '50px',
    height: '50px',
    backgroundColor: 'green',
    borderRadius: '5px',
    boxShadow: '0 6px #024F16',
    border: '1px solid black',
    cursor: 'pointer'
}

let startButtonPressed = {
    float: 'left',
    width: '50px',
    height: '50px',
    backgroundColor: 'green',
    borderRadius: '5px',
    transform: 'translateY(3px)',
    transition: '150ms ease-in-out',
    boxShadow: '0 3px #02340F',
    border: '1px solid black',
    cursor: 'pointer'
}

let stopButton = {
    float: 'left',
    marginLeft: '5px',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    borderRadius: '5px',
    boxShadow: '0 6px #AD1E1E',
    border: '1px solid black',
    cursor: 'pointer'
}

let stopButtonPressed = {
    float: 'left',
    marginLeft: '5px',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    borderRadius: '5px',
    transform: 'translateY(3px)',
    transition: '150ms ease-in-out',
    boxShadow: '0 3px #521601',
    border: '1px solid black',
    cursor: 'pointer'
}

let imageContainerStart = {
    height: '50px',
    width: '50px',

}

let playContainer = {
    width: '200px',
    marginTop: '20px',
    marginLeft: '5px',
    // backgroundColor: 'grey',
    // height: '75px'
}

let waveformTextDisplay = {
    border: '3px solid white',
    color: 'white',
    marginLeft: '80px',
    marginTop: '10px',
    width: '100px',
    height: '40px',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '22px',
    color: 'white',
    borderRadius: '3px'
    
}

let volumeBox = {
    width: '75px',
    color: 'white',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '18px',
    marginLeft: '10px',
    marginTop: '5px'
}

let bpmBox = {
    width: '120px',
    color: 'white',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '18px',
    marginTop: '5px',
    marginLeft: '10px'
}

let rangeStyle = {
    width: '50px',
    transform: 'rotate(270deg)'
    
}

let rangeContainer = {
    width: '50px'
}


let envelopeContainer = {
    width: '75px',
    color: 'white',
    fontFamily: '"Share Tech", sans-serif',
    fontSize: '18px',
    marginLeft: '0px',
    marginTop: '5px'
}

let envelopeBuffer = {
    marginLeft: '0px'
}

let envText = {
    marginTop: '10px',
    marginLeft: '10px'
}


let envelopeControl = {}

class Sequencer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            test: "hey",
            bpm: 120,
            position: 0,
            playing: false,
            steps: 16,
            currentPattern: 0,
            currentStep: 0,
            noteDivision: "4n",
            volume: -5,
            currentView: "drums",
            patternName: this.props.pattern.name,
            tracks: ["Kick", "Snare", "Hihat", "Dbl HH", "Clap", "Tom 1", "Tom 2", "FX"],
            pattern: this.props.pattern.events,
            synthBank: this.props.pattern.synthEvents,
            currentSynthSelection: 0,
            currentSynthSettings: this.props.pattern.SynthEvents,
            noteList: [["A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"],
                       ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"],
                       ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6", "E6", "F6", "G6"],
                       ["A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6", "B6", "C7", "D7", "E7", "F7", "G7"],
        ],
            synthlist: [],
            octaveSettings: [0, 1, 2, 3],
            oscillatorSettings: [{type: "square"}, 
                                {type: "square"}, 
                                {type: "square"}, 
                                {type: "square"}],
            envelopeSettings: [{attack: "0.55", decay: "0.1", sustain: "0.3", release : "1"},
                               {attack: "0.005", decay: "0.1", sustain: "0.3", release : "1"},
                               {attack: "0.005", decay: "0.1", sustain: "0.3", release : "1"},
                               {attack: "0.005", decay: "0.1", sustain: "0.3", release : "1"},],
            volumeSettings: [-5, -5, -5, -5],
            chordArray: [[],[],[],[]],
            effectsArray: [[],[],[],[]]
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

        this.tom1 = new Tone.Player({
            "url" : "./Tom1.wav"
        }).toMaster();

        this.tom2 = new Tone.Player({
            "url" : "./Tom2.wav"
        }).toMaster();

        this.fx1 = new Tone.Player({
            "url" : "./FX1.wav"
        }).toMaster();



        this.kickVol = new Tone.PanVol();
        this.kick.chain(this.kickVol, Tone.Master);

        this.hihatVol = new Tone.PanVol();
        this.hihat.chain(this.hihatVol, Tone.Master);

        this.chorus = new Tone.Chorus(0, 0, 0);

        this.positionLoop;
        this.kickLoop;
        this.snareLoop;
        this.hiHatLoop;
        this.clapLoop;
        this.crashLoop;
        this.tom1Loop;
        this.tom2Loop;
        this.fx1Loop;

        this.synth = Tone.Synth;

        this.synth1;
        this.synth2;
        this.synth3;
        this.synth4;

        
        this.synth1Effects = [];
        this.synth2Effects = [];
        this.synth3Effects = [];
        this.synth4Effects = [];

      

      }

    getCurrentNotes = () => {

        console.log(this.state.synthBank[0].pattern[5]);
        console.log(this.state.noteList[this.state.octaveSettings[0]][5]);

        let chordArray1 = [];
        let chordArray2 = [];
        let chordArray3 = [];
        let chordArray4 = [];
        
        // for(let i=0; this.state.synthBank[0].length; i++){
        //     if(this.state.synthBank[0].pattern[i] == 1){
                

        //     }
           
        // }

        // console.log(finalArray);


    }


    prepareSynths = () => {

        // console.log(this.state.oscillatorSettings[0])
        // console.log(this.state.oscillatorSettings[1])

        console.log(this.state.volumeSettings[0]);


        let vol1 = new Tone.Volume(this.state.volumeSettings[0]);
        let vol2 = new Tone.Volume(this.state.volumeSettings[1]);
        let vol3 = new Tone.Volume(this.state.volumeSettings[2]);
        let vol4 = new Tone.Volume(this.state.volumeSettings[3]);

        this.synth1 = new Tone.PolySynth(14, Tone.Synth, {
            "oscillator": this.state.oscillatorSettings[0], "envelope": this.state.envelopeSettings[0]},).chain(vol1, Tone.Master),

        this.synth2 = new Tone.PolySynth(14, Tone.Synth, {
            "oscillator" : this.state.oscillatorSettings[1], "envelope": this.state.envelopeSettings[1]}).chain(vol2, Tone.Master)

        this.synth3 = new Tone.PolySynth(14, Tone.Synth, {
            "oscillator" : this.state.oscillatorSettings[2], "envelope": this.state.envelopeSettings[2] }).chain(vol3, Tone.Master)

        this.synth4 = new Tone.PolySynth(14, Tone.Synth, {
            "oscillator" : this.state.oscillatorSettings[3], "envelope": this.state.envelopeSettings[3] }).chain(vol4, Tone.Master)
        

        // console.log(this.synth1)
        // console.log(this.synth2)
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

        this.crashLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.hihat.start();
                setTimeout(() => { this.hihat.start()}, 100);
            }
        }, this.state.pattern[3], this.state.noteDivision).start(0);

        this.clapLoop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.clap.start();
            }
        }, this.state.pattern[4], this.state.noteDivision).start(0);

        this.tom1Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.tom1.start();
            }
        }, this.state.pattern[5], this.state.noteDivision).start(0);

        this.tom2Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.tom2.start();
            }
        }, this.state.pattern[6], this.state.noteDivision).start(0);

        this.fx1Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.fx1.start();
            }
        }, this.state.pattern[7], this.state.noteDivision).start(0);

    }

    prepareSingleGrid = (synth, pattern) => {

        console.log(this.state.synthBank[0].pattern)

        let array1 = [];
        let array2 = [];
        let array3 = [];
        let array4 = [];

        for(let i=0; i < this.state.synthBank[0].pattern[0].length; i++){
            let entry = [];
            for(let j=0; j < this.state.synthBank[0].pattern.length; j++){
                
                if(this.state.synthBank[0].pattern[j][i] == 1){
                    entry.push(this.state.noteList[this.state.octaveSettings[0]][j]);
                };
            }
            array1.push(entry);
        }
        console.log(array1);

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

        // SYNTH TWO//
        //         //
        //         //
        // ///////////

        this.synth1Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][0]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[0], this.state.noteDivision).start(0);

        this.synth1Loop1 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][1]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[1], this.state.noteDivision).start(0);

        this.synth1Loop2 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][2]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[2], this.state.noteDivision).start(0);

        this.synth1Loop3 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][3]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[3], this.state.noteDivision).start(0);

        this.synth1Loop4 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][4]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[4], this.state.noteDivision).start(0);

        this.synth1Loop5 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][5]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[5], this.state.noteDivision).start(0);

        this.synth1Loop6 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][6]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[6], this.state.noteDivision).start(0);

        this.synth1Loop7 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][7]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[7], this.state.noteDivision).start(0);

        this.synth1Loop8 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][8]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[8], this.state.noteDivision).start(0);

        this.synth1Loop9 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][9]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[9], this.state.noteDivision).start(0);

        this.synth1Loop10 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][10]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[10], this.state.noteDivision).start(0);

        this.synth1Loop11 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][11]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[11], this.state.noteDivision).start(0);

        this.synth1Loop12 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][12]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[12], this.state.noteDivision).start(0);

        this.synth1Loop13 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth2.triggerAttackRelease([this.state.noteList[1][13]], '4n');
            }
            
        }, this.state.synthBank[1].pattern[13], this.state.noteDivision).start(0);

        // // // //////
        // // // SYNTH THREE
        
        // // // /////

        this.synth2Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][0]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[0], this.state.noteDivision).start(0);

        this.synth2Loop1 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][1]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[1], this.state.noteDivision).start(0);

        this.synth2Loop2 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][2]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[2], this.state.noteDivision).start(0);

        this.synth2Loop3 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][3]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[3], this.state.noteDivision).start(0);

        this.synth2Loop4 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][4]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[4], this.state.noteDivision).start(0);

        this.synth2Loop5 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][5]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[5], this.state.noteDivision).start(0);

        this.synth2Loop6 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][6]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[6], this.state.noteDivision).start(0);

        this.synth2Loop7 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][7]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[7], this.state.noteDivision).start(0);

        this.synth2Loop8 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][8]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[8], this.state.noteDivision).start(0);

        this.synth2Loop9 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][9]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[9], this.state.noteDivision).start(0);

        this.synth2Loop10 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][10]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[10], this.state.noteDivision).start(0);

        this.synth2Loop11 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][11]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[11], this.state.noteDivision).start(0);

        this.synth2Loop12 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][12]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[12], this.state.noteDivision).start(0);

        this.synth2Loop13 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][13]], '4n');
            }
            
        }, this.state.synthBank[2].pattern[13], this.state.noteDivision).start(0);

        /////
        // FOUR
        //
        //////

        this.synth3Loop = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][0]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[0], this.state.noteDivision).start(0);

        this.synth3Loop1 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][1]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[1], this.state.noteDivision).start(0);

        this.synth3Loop2 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][2]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[2], this.state.noteDivision).start(0);

        this.synth3Loop3 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][3]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[3], this.state.noteDivision).start(0);

        this.synth3Loop4 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][4]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[4], this.state.noteDivision).start(0);

        this.synth3Loop5 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][5]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[5], this.state.noteDivision).start(0);

        this.synth3Loop6 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][6]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[6], this.state.noteDivision).start(0);

        this.synth3Loop7 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][7]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[7], this.state.noteDivision).start(0);

        this.synth3Loop8 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][8]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[8], this.state.noteDivision).start(0);

        this.synth3Loop9 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth3.triggerAttackRelease([this.state.noteList[1][9]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[9], this.state.noteDivision).start(0);

        this.synth3Loop10 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][10]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[10], this.state.noteDivision).start(0);

        this.synth3Loop11 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][11]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[11], this.state.noteDivision).start(0);

        this.synth3Loop12 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][12]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[12], this.state.noteDivision).start(0);

        this.synth3Loop13 = new Tone.Sequence((time, note) => {
            if(note == 1){
                this.synth4.triggerAttackRelease([this.state.noteList[1][13]], '4n');
            }
            
        }, this.state.synthBank[3].pattern[13], this.state.noteDivision).start(0);

    }

    preparePianoGridDynamic = (synth, voice, pattern, time, note) => {
        let trackName = "track" + synth + voice;
        console.log(trackName);
    } 

    changePatternLength = () => {
        this.preparePianoGridDynamic(1, 0, 0, '4n')

        // this.setState({steps: 32})

        // console.log(this.state.pattern);

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
        this.prepareSynths();
        this.prepareEventGrid();
        this.preparePianoGrid();
        Tone.Master.volume.value = -5;
    }

    updateTrackPattern = (track, pattern) => {
        this.positionLoop.dispose();
        this.kickLoop.dispose();
        this.snareLoop.dispose();
        this.hiHatLoop.dispose();
        this.clapLoop.dispose();
        this.crashLoop.dispose();
        this.tom1Loop.dispose();
        this.tom2Loop.dispose();
        this.fx1Loop.dispose();

        this.prepareEventGrid();
    }

    updatePianoRoll = (track, pattern) => {

        // console.log(this.state.synthBank[0].pattern);
        this.synthLoop.dispose();
        this.synth1Loop.dispose();
        this.synth2Loop.dispose();
        this.synth3Loop.dispose();

        for(let i=1; i < this.state.noteList[0].length; i++){
            let trackDispose = "synthLoop" + i;
            this[trackDispose].dispose();
        }

        for(let i=1; i < this.state.noteList[0].length; i++){
            let trackDispose = "synth1Loop" + i;
            this[trackDispose].dispose();
        }

        for(let i=1; i < this.state.noteList[0].length; i++){
            let trackDispose = "synth2Loop" + i;
            this[trackDispose].dispose();
        }

        for(let i=1; i < this.state.noteList[0].length; i++){
            let trackDispose = "synth3Loop" + i;
            this[trackDispose].dispose();
        }

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

    handleWaveChange = () => {

    }

    getVolume = () => {

    }

    changeSynthSelection = (event) => {

        console.log(event.target.value);
        this.setState({currentSynthSelection: event.target.value});
        console.log(this.state.currentSynthSelection);

    }

    // handleSynthOscSettings = (event) => {
    
    //     this.synth1.dispose();
    //     this.synth2.dispose();
    //     let tempSettings = this.state.oscillatorSettings
    //     tempSettings[this.state.currentSynthSelection].type = event.target.value;
    //     console.log(tempSettings);
    //     this.setState({oscillatorSettings: tempSettings})
    //     this.prepareSynths();


    // }

    handleSynthOscSettings = (wave) => {
    
        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        console.log(wave);
        let tempSettings = this.state.oscillatorSettings
        tempSettings[this.state.currentSynthSelection].type = wave;
        console.log(tempSettings);
        this.setState({oscillatorSettings: tempSettings})
        this.prepareSynths();


    }

    changeView = () => {
        if(this.state.currentView == "drums"){
            this.setState({currentView: "synth"})
        }
        else{
            this.setState({currentView: "drums"})
        }

        // this.getCurrentNotes();
        this.prepareSingleGrid();

    }

    changeAttack = (event) => {
        // Tone.Master.volume.value= event.currentTarget.value;

        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        console.log(this.state.envelopeSettings[this.state.currentSynthSelection].attack + " is the old")

        let envArray = this.state.envelopeSettings;
        envArray[this.state.currentSynthSelection].attack = parseInt(event.currentTarget.value) / 100
        console.log(envArray);
        this.setState({envelopeSettings: envArray});

        this.prepareSynths();

        // this.setState({volume: event.currentTarget.value })
    }

    changeDecay = (event) => {
        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        console.log(this.state.envelopeSettings[this.state.currentSynthSelection].decay + " is the old")

        let envArray = this.state.envelopeSettings;
        envArray[this.state.currentSynthSelection].decay = parseInt(event.currentTarget.value) / 100
        console.log(envArray);
        this.setState({envelopeSettings: envArray});

        this.prepareSynths();
    }

    changeSustain = (event) => {
        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        console.log(this.state.envelopeSettings[this.state.currentSynthSelection].sustain + " is the old")

        let envArray = this.state.envelopeSettings;
        envArray[this.state.currentSynthSelection].sustain = parseInt(event.currentTarget.value) / 100
        console.log(envArray);
        this.setState({envelopeSettings: envArray});

        this.prepareSynths();
    }

    changeRelease = (event) => {
        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        console.log(this.state.envelopeSettings[this.state.currentSynthSelection].release + " is the old")

        let envArray = this.state.envelopeSettings;
        envArray[this.state.currentSynthSelection].release = parseInt(event.currentTarget.value) / 100
        console.log(envArray);
        this.setState({envelopeSettings: envArray});

        this.prepareSynths();
    }

    changeSynthVolume = (event) => {
        this.synth1.dispose();
        this.synth2.dispose();
        this.synth3.dispose();
        this.synth4.dispose();

        let volSet = this.state.volumeSettings;

        console.log(volSet);

        volSet[this.state.currentSynthSelection] = event.currentTarget.value;

        this.setState({volumeSettings: volSet});
        this.prepareSynths();

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
        

        if(this.state.currentSynthSelection == 0){
            for(let i=0; i < this.state.noteList[0].length; i++){
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
        }

        if(this.state.currentSynthSelection == 1){
            for(let i=0; i < this.state.noteList[0].length; i++){
                pianoArray.push(
                    <div className="row" key={i} track={i}>
                    <span></span>
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
        }

        if(this.state.currentSynthSelection == 2){
            for(let i=0; i < this.state.noteList[0].length; i++){
                pianoArray.push(
                    <div className="row" key={i} track={i}>
                    <span></span><span></span>
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
        }

        if(this.state.currentSynthSelection == 3){
            for(let i=0; i < this.state.noteList[0].length; i++){
                pianoArray.push(
                    <div className="row" key={i} track={i}>
                    <span></span><span></span><span></span>
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
        }

        return(
        <Fragment>
            {/* className={this.state.steps == 16 ? "col-md-7 offset-3" : "none"} */}
            <div style={appPosition}>
            <div className="row" style={controlBoard}>
            <div style={playContainer}>
                <div style={this.state.playing ? startButtonPressed : startButton} onClick={() => this.startLoop()}><img src="../../play.png" style={imageContainerStart}></img></div>
                <div style={!this.state.playing ? stopButtonPressed : stopButton} onClick={() => this.stopLoop()}><img src="../../stop.png" style={imageContainerStart}></img></div>
                <div style={numberDisplay}>{this.state.position.toString().substring(8,0)}</div>
            </div>
                {/* <button onClick={() => this.startLoop()}> Start </button> */}
                {/* <button onClick={() => this.stopLoop()}> Stop </button> */}

                {/* <div style={numberDisplay}>{Math.floor(Tone.Transport.seconds * 100) / 100}</div> */}
                <div style={volumeBox}>
                    <p width={'50px'}>Volume</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle}type="range" min="-60" max="5" defaultValue="0" onChange={this.volumeRange}></input>
                    </div>
                </div>
                <div style={bpmBox}>
                <p>BPM: {this.state.bpm} </p>
                <input type="range" min="70" max="200" defaultValue="120" onChange={this.changeBPM} style={sliderStyle}></input>
                </div>

                <div style={volumeBox}>
                <button onClick={this.changeView}>Synth View</button>
                </div>

                
            </div>

            {this.state.currentView !== "drums" ? <span></span> : <div className="row">
            <div style={scrollContainer}>
                {trackArray}
                </div>
            </div>  }


            {this.state.currentView !== "synth" ? <span></span>: <div className="row">
            <div>
                <div className="row" style={controlBoardSynth}>
                    <div style={synthControlContainer}>
                        <div className="row" style={synthPadding}>
                        <div><button style={this.state.currentSynthSelection == 0 ? synthSelectionButtonActive : synthSelectionButton} value="0" onClick={this.changeSynthSelection}>Synth 1</button></div>
                        <div><button style={this.state.currentSynthSelection == 1 ? synthSelectionButtonActive : synthSelectionButton} value="1" onClick={this.changeSynthSelection}>Synth 2</button></div>
                        </div>

                        <div className="row" style={synthPadding}>
                        <div><button style={this.state.currentSynthSelection == 2 ? synthSelectionButtonActive : synthSelectionButton} value="2" onClick={this.changeSynthSelection}>Synth 3</button></div>
                        <div><button style={this.state.currentSynthSelection == 3 ? synthSelectionButtonActive : synthSelectionButton} value="3" onClick={this.changeSynthSelection}>Synth 4</button></div>
                        </div>
                    </div>
                    <div>
                        <div className="row" style={waveformStyleBox}>
                        <div onClick={() => this.handleSynthOscSettings("square")} style={this.state.oscillatorSettings[this.state.currentSynthSelection].type == "square" ? waveformStyleActive : waveformStyle} 
                             value="square"><img src="../../square.png" style={imageContainer}></img></div>
                        <div onClick={() => this.handleSynthOscSettings("triangle")} style={this.state.oscillatorSettings[this.state.currentSynthSelection].type == "triangle" ? waveformStyleActive : waveformStyle} 
                             value="triangle"><img src="../../triangle.png" style={imageContainer}></img></div>
                        <div onClick={() => this.handleSynthOscSettings("sine")} style={this.state.oscillatorSettings[this.state.currentSynthSelection].type == "sine" ? waveformStyleActive : waveformStyle} 
                             value="sine"><img src="../../sine.png" style={imageContainer}></img></div>
                        <div onClick={() => this.handleSynthOscSettings("sawtooth")} style={this.state.oscillatorSettings[this.state.currentSynthSelection].type == "sawtooth" ? waveformStyleActive : waveformStyle} 
                             value="sawtooth"><img src="../../saw.png" style={imageContainer}></img></div>
                        </div>
                        <div className="row">
                            <div style={waveformTextDisplay}>{this.state.oscillatorSettings[this.state.currentSynthSelection].type}</div>
                        </div>
                        </div>

                    <div style={envelopeBuffer}>
                        <div style={envelopeContainer}>
                            <p width={'30px'}>Attack</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle} type="range" min="1" max="100" defaultValue={this.state.envelopeSettings[this.state.currentSynthSelection].attack} onChange={this.changeAttack}></input>
                            <p style={envText}>{this.state.envelopeSettings[this.state.currentSynthSelection].attack}</p>
                        </div>
                    </div>
                    </div>
                
                    <div style={envelopeBuffer}>
                        <div style={envelopeContainer}>
                            <p width={'30px'}>Decay</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle} type="range" min="1" max="100" defaultValue={this.state.envelopeSettings[this.state.currentSynthSelection].decay} onChange={this.changeDecay}></input>
                            <p style={envText}>{this.state.envelopeSettings[this.state.currentSynthSelection].decay}</p>
                        </div>
                    </div>
                    </div>
                    
                    <div style={envelopeBuffer}>
                        <div style={envelopeContainer}>
                            <p width={'30px'}>Sustain</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle} type="range" min="1" max="100" defaultValue={this.state.envelopeSettings[this.state.currentSynthSelection].sustain} onChange={this.changeSustain}></input>
                            <p style={envText}>{this.state.envelopeSettings[this.state.currentSynthSelection].sustain}</p>
                        </div>
                    </div>
                    </div>

                    <div style={envelopeBuffer}>
                        <div style={envelopeContainer}>
                            <p width={'30px'}>Release</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle} type="range" min="1" max="100" defaultValue={this.state.envelopeSettings[this.state.currentSynthSelection].release} onChange={this.changeRelease}></input>
                            <p style={envText}>{this.state.envelopeSettings[this.state.currentSynthSelection].release}</p>
                        </div>
                    </div>
                    </div>

                    <div style={envelopeBuffer}>
                        <div style={envelopeContainer}>
                            <p width={'30px'}>Volume</p>
                        <div style={rangeContainer}>
                            <input style={rangeStyle} type="range" min="-60" max="5" defaultValue={this.state.envelopeSettings[this.state.currentSynthSelection].release} onChange={this.changeSynthVolume}></input>
                            <p style={envText}>{this.state.volumeSettings[this.state.currentSynthSelection]}</p>
                        </div>
                    </div>
                    </div>   
                
                
                </div>
                {/* <div className ="row" style={effectsContainer}>
                        EFFECTS THINGS
                </div> */}
            </div>
            </div> }

        <div>
        {this.state.currentView !== "synth" ? <span></span> : <div className="row">
                <div style={scrollContainer}>
                {pianoArray}
                </div>
            </div> }
            </div>
        </div>
        </Fragment>
        )
    }
}

export default Sequencer;