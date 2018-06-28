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
      
      
      playExample = () => {
      
        let currentTime = this.getTime();
        
        var synth1 = new Tone.Synth().toMaster()
        var synth2 = new Tone.Synth().toMaster()
        var synth3 = new Tone.Synth().toMaster()
      
        synth1.triggerAttackRelease('C4', '32n', currentTime + 0)
        synth2.triggerAttackRelease('E4', '32n', currentTime + 0)
        synth3.triggerAttackRelease('G4', '32n', currentTime + 0)
        setTimeout(function(){console.log("set 1")})
        setTimeout(function(){console.log("set 2")}, 1000)
        setTimeout(function(){console.log("set 3")}, 2000)
        setTimeout(function(){console.log("set 4")}, 3000)
      
      
        synth1.triggerAttackRelease('G4', '16n', currentTime + 1)
        synth2.triggerAttackRelease('B4', '16n', currentTime + 1)
        synth3.triggerAttackRelease('D4', '16n', currentTime + 1)
        
        
        synth1.triggerAttackRelease('A4', '4n', currentTime + 2)
        synth2.triggerAttackRelease('C4', '4n', currentTime + 2)
        synth3.triggerAttackRelease('E4', '4n', currentTime + 2)
      
        synth1.triggerAttackRelease('C4', '8n', currentTime + 3)
        synth2.triggerAttackRelease('E4', '8n', currentTime + 3)
        synth3.triggerAttackRelease('G4', '8n', currentTime + 3)
        
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