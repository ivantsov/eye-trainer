import React, {Component} from 'react';
import Audio from './Audio';
import exercises from './Exercises.config';

import styles from './Exercises.css';

export default class Exercises extends Component {
  state = {
    currentExerciseIndex: 0,
    currentTime: exercises[0].duration,
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    this.tick();
  }

  render() {
    const {
      currentExerciseIndex,
      currentTime,
    } = this.state;
    const {
      title,
      subTitle,
      dotClassName,
    } = exercises[currentExerciseIndex];

    return (
      <div className={styles.component}>
        <Audio shouldPlay={currentExerciseIndex}/>

        <div className={styles.counter}>{currentExerciseIndex + 1} / {exercises.length}</div>

        <div className={`${styles.dot} ${dotClassName}`}/>

        <div>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>

        <div className={styles.timer}>{currentTime.toString().padStart(2, '0')}</div>
      </div>
    );
  }

  tick = () => {
    setTimeout(() => {
      const {
        currentExerciseIndex,
        currentTime,
      } = this.state;

      if (currentTime > 0) {
        this.setState({currentTime: currentTime - 1});
      } else {
        const nextExerciseIndex = currentExerciseIndex + 1;

        if (nextExerciseIndex < exercises.length) {
          this.setState({
            currentExerciseIndex: nextExerciseIndex,
            currentTime: exercises[nextExerciseIndex].duration,
          });
        } else {
          this.props.onFinish();
        }
      }
    }, 1000);
  }
}
