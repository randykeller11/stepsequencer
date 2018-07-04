import React, { Component } from 'react';
import Tone from 'tone';


class Piano extends Component {

    state = {

    }

    playNote = input => {
        var synth1 = new Tone.Synth().toMaster()
        synth1.set({
            "envelope" : {
                "attack" : 0.1,
                "decay": 0.1,
                "sustain": 0.3,
                "release" : 1
            }
        });

    
        console.log(input);
        let currentTime = Tone.now();
        synth1.triggerAttackRelease(input, '8n', currentTime + 0)
    }



    render(){
        return(
        <div>
        <button onClick={() => this.playNote('A1')} value="A1"> A1 </button>
        <button onClick={() => this.playNote('B1')} value="B1"> B1 </button>
        <button onClick={() => this.playNote('C2')} value="C2"> C2 </button>
        <button onClick={() => this.playNote('D2')} value="D2"> D2 </button>
        <button onClick={() => this.playNote('E2')} value="E2"> E2 </button>
        <button onClick={() => this.playNote('F2')} value="F2"> F2 </button>
        <button onClick={() => this.playNote('G2')} value="G2"> G2 </button>
        <button onClick={() => this.playNote('A2')} value="A2"> A2 </button>
        <button onClick={() => this.playNote('B2')} value="B2"> B2 </button>
        <button onClick={() => this.playNote('C3')} value="C3"> C3 </button>
        <button onClick={() => this.playNote('D3')} value="D3"> D3 </button>
        <button onClick={() => this.playNote('E3')} value="E3"> E3 </button>
        <button onClick={() => this.playNote('F3')} value="F3"> F3 </button>
        <button onClick={() => this.playNote('G3')} value="G3"> G3 </button>
        <button onClick={() => this.playNote('A3')} value="A3"> A3 </button>
        <button onClick={() => this.playNote('B3')} value="B3"> B3 </button>
        <button onClick={() => this.playNote('C4')} value="C4"> C4 </button>
        <button onClick={() => this.playNote('D4')} value="D4"> D4 </button>
        <button onClick={() => this.playNote('E4')} value="E4"> E4 </button>
        <button onClick={() => this.playNote('F4')} value="F4"> F4 </button>
        <button onClick={() => this.playNote('G4')} value="G4"> G4 </button>
        <button onClick={() => this.playNote('A4')} value="A4"> A4 </button>
        <button onClick={() => this.playNote('B4')} value="B4"> B4 </button>
        <button onClick={() => this.playNote('C5')} value="C4"> C5 </button>
        <button onClick={() => this.playNote('D5')} value="D4"> D5 </button>
        <button onClick={() => this.playNote('E5')} value="E4"> E5 </button>
        <button onClick={() => this.playNote('F5')} value="F4"> F5 </button>
        <button onClick={() => this.playNote('G5')} value="G4"> G5 </button>
        </div>
        )
    }



}

export default Piano;