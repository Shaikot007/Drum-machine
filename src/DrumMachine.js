import React, { Component } from 'react';
import './DrumMachine.css';

const SoundData = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or Press a Key",
      audioVolume: 0.5,
      power: true,
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  // For play audio
  playAudio = (keyTrigger, id) => {
    if(this.state.power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      sound.play();
      sound.volume = this.state.audioVolume;
      this.handleDisplay(id);
    }
  }

  // For press a keyboard button
  handleKeydown = event => {
    if(this.state.power) {
      const sound = SoundData.find(soundData => soundData.keyCode === event.keyCode);
      if (sound) {
        this.playAudio(sound.keyTrigger, sound.id);
      }
    }
  }

  // For display a id name by click or press a keyboard button
  handleDisplay = (event) => {
    this.setState({
      display: event
    });
  }
  
  // For power button on off
  handlePower = () => {
    this.setState((state) => ({
      power: !state.power,
      display: 'Click or Press a Key'
    }))
  }
  
  // For volume slider
  adjustVolume = (event) => {
    if (this.state.power) {
      this.setState({
        audioVolume: event.target.value,
        display: "Volume: " + Math.round(event.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  // For clear volume value
  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render () {
    return (
      <div id="drum-machine">
        <div className="drum-box">
          <header>
            <h5>Drum Machine</h5>
          </header>
          <div id="drum-pad">
            <div className="all-drum-button">
              <div className="drum-button">
                <button className="drum-pad" id={SoundData[0].id} onClick={() => this.playAudio(SoundData[0].keyTrigger, SoundData[0].id)}>{SoundData[0].keyTrigger}<audio className="clip" id={SoundData[0].keyTrigger} src={SoundData[0].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[1].id} onClick={() => this.playAudio(SoundData[1].keyTrigger, SoundData[1].id)}>{SoundData[1].keyTrigger}<audio className="clip" id={SoundData[1].keyTrigger} src={SoundData[1].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[2].id} onClick={() => this.playAudio(SoundData[2].keyTrigger, SoundData[2].id)}>{SoundData[2].keyTrigger}<audio className="clip" id={SoundData[2].keyTrigger} src={SoundData[2].url} type="audio/mp3"></audio></button>
              </div>
              <div className="drum-button">
                <button className="drum-pad" id={SoundData[3].id} onClick={() => this.playAudio(SoundData[3].keyTrigger, SoundData[3].id)}>{SoundData[3].keyTrigger}<audio className="clip" id={SoundData[3].keyTrigger} src={SoundData[3].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[4].id} onClick={() => this.playAudio(SoundData[4].keyTrigger, SoundData[4].id)}>{SoundData[4].keyTrigger}<audio className="clip" id={SoundData[4].keyTrigger} src={SoundData[4].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[5].id} onClick={() => this.playAudio(SoundData[5].keyTrigger, SoundData[5].id)}>{SoundData[5].keyTrigger}<audio className="clip" id={SoundData[5].keyTrigger} src={SoundData[5].url} type="audio/mp3"></audio></button>
              </div>
              <div className="drum-button">
                <button className="drum-pad" id={SoundData[6].id} onClick={() => this.playAudio(SoundData[6].keyTrigger, SoundData[6].id)}>{SoundData[6].keyTrigger}<audio className="clip" id={SoundData[6].keyTrigger} src={SoundData[6].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[7].id} onClick={() => this.playAudio(SoundData[7].keyTrigger, SoundData[7].id)}>{SoundData[7].keyTrigger}<audio className="clip" id={SoundData[7].keyTrigger} src={SoundData[7].url} type="audio/mp3"></audio></button>
                <button className="drum-pad" id={SoundData[8].id} onClick={() => this.playAudio(SoundData[8].keyTrigger, SoundData[8].id)}>{SoundData[8].keyTrigger}<audio className="clip" id={SoundData[8].keyTrigger} src={SoundData[8].url} type="audio/mp3"></audio></button>
              </div>
            </div>
            <div className="activation-button">
              <p>Power</p>
              <label className="switch">
                <input type="checkbox" id="power-checkbox" checked={this.state.power} onChange={this.handlePower} />
                <span className="slider round"></span>
              </label>
              <div id="display">{this.state.power ? this.state.display : ''}</div>
              <input className="volume-slider" type="range" min="0.0" max="1.0" step="0.01" defaultValue={this.state.audioVolume} onChange={this.adjustVolume} />
            </div>
          </div>
        </div>
        <footer>
          <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
        </footer>
      </div>
    );
  }
}

export default DrumMachine;