import React, {Component} from 'react';
import Exercises from '../Exercises';

import styles from './App.css';

import audio from './audio.wav';

function Audio({audioRef}) {
  return (
    <audio
      ref={audioRef}
      src={audio}
    />
  );
}

function GetStarted({onClick}) {
  return (
    <div className={styles.getStarted}>
      <button
        className={styles.button}
        onClick={onClick}
      >
        Let’s Start
      </button>
    </div>
  );
}

export default class App extends Component {
  state = {
    started: false,
  };

  render() {
    return (
      <div className={styles.component}>
        {/* should live here, because we destroy <Exercises/> before sound starts */}
        <Audio audioRef={$el => this.$audio = $el}/>

        {this.state.started ? (
          <Exercises
            onFinish={this.onFinish}
            playSound={this.playSound}
          />
        ) : <GetStarted onClick={this.startExercises}/>}
      </div>
    );
  }

  onFinish = () => {
    this.setState({started: false});
  }

  startExercises = () => {
    this.setState({started: true});
  }

  playSound = () => {
    this.$audio.play();
  }
}
