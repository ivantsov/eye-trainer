import React, {Component} from 'react';
import Exercises from '../Exercises';

import styles from './App.css';

function GetStarted({onClick}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      Let’s Start
    </button>
  );
}

function Finished() {
  return <div className={styles.title}>Finished!</div>;
}

export default class App extends Component {
  state = {
    started: false,
    finished: false,
  };

  render() {
    const{
      started,
      finished,
    } = this.state;

    let content;
    if (!started) {
      content = <GetStarted onClick={this.startExercises}/>;
    } else if (finished) {
      content = <Finished/>;
    } else {
      content = <Exercises onFinish={this.onFinish}/>;
    }

    return (
      <div className={styles.component}>{content}</div>
    );
  }

  startExercises = () => {
    this.setState({started: true});
  }

  onFinish = () => {
    this.setState({finished: true});
  }
}
