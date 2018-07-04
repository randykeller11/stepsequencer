import React, { Component } from 'react';
import Tone from 'tone';


class Chords extends Component {

    state = {

    }

    getTime = () => {
        let time = Tone.now();
        console.log(Tone.now())
        return time;
    }

    triggerSynth = (synth, note, time) => {
        synth.triggerAttackRelease(note, time)
    }
      
     
    playExample = () => {

        Tone.Transport.bpm.value = 140;
        let currentTime = this.getTime();
        
        var synth1 = new Tone.Synth().toMaster()
        var synth2 = new Tone.Synth().toMaster()
        var synth3 = new Tone.Synth().toMaster()
        var synth4 = new Tone.Synth().toMaster()

      
        synth1.triggerAttackRelease('C4', '1n')
        synth2.triggerAttackRelease('E4', '1n')
        synth3.triggerAttackRelease('G4', '1n')
        synth3.triggerAttackRelease('C4', '1n')
      
        synth1.triggerAttackRelease('G4', '1n', currentTime + 1.5)
        synth2.triggerAttackRelease('B4', '1n', currentTime + 1.5)
        synth3.triggerAttackRelease('D4', '1n', currentTime + 1.5)
        synth3.triggerAttackRelease('G4', '1n', currentTime + 1.5)
           
        synth1.triggerAttackRelease('A4', '1n', currentTime + 3.0)
        synth2.triggerAttackRelease('C4', '1n', currentTime + 3.0)
        synth3.triggerAttackRelease('E4', '1n', currentTime + 3.0)
        synth3.triggerAttackRelease('A4', '1n', currentTime + 1.5)
           
      
        synth1.triggerAttackRelease('C4', '1n', currentTime + 4.5)
        synth2.triggerAttackRelease('E4', '1n', currentTime + 4.5)
        synth3.triggerAttackRelease('G4', '1n', currentTime + 4.5)
        synth3.triggerAttackRelease('C4', '1n', currentTime + 1.5)

      }


    render(){
        return(
        <div>
        <button onClick={() => this.playExample()} value="A1"> Play </button>
        </div>
        )
    }



}

export default Chords;