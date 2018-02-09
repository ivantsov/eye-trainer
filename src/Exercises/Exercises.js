import anime from 'animejs';
import React, {PureComponent} from 'react';
import exercises from './Exercises.config';

import styles from './Exercises.css';

export default class Exercises extends PureComponent {
  state = {
    exerciseIndex: 0,
    timer: null,
  };

  componentDidMount() {
    this.run();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.exerciseIndex !== prevState.exerciseIndex) {
      this.run();
    }
  }

  render() {
    const {exerciseIndex, timer} = this.state;
    const {title, subTitle} = exercises[exerciseIndex];

    return (
      <div className={styles.container}>
        <div className={styles.counter}>
          {exerciseIndex + 1} / {exercises.length}
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>

        <div
          ref={el => {
            this.$dot = el;
          }}
          className={styles.dot}
        />

        <div className={styles.timer}>
          {timer !== null && timer.toString().padStart(2, '0')}
        </div>
      </div>
    );
  }

  onTick = anim => {
    if (!anim.currentTime || anim.currentTime === anim.duration) {
      return;
    }

    const currentTime = Math.floor(
      (anim.duration * anim.remaining - anim.currentTime) / 1000,
    );
    this.setState({timer: currentTime});
  };

  onExerciseFinish = () => {
    const {exerciseIndex} = this.state;
    const {onFinish, playSound} = this.props;
    const nextExerciseIndex = exerciseIndex + 1;

    if (nextExerciseIndex < exercises.length) {
      this.setState({exerciseIndex: nextExerciseIndex});
    } else {
      onFinish();
    }

    playSound();
  };

  run = () => {
    const exercise = exercises[this.state.exerciseIndex];
    const transitionPromise = exercise.transitionStep
      ? anime({
          ...exercise.transitionStep,
          targets: this.$dot,
        })
      : {finished: Promise.resolve()};

    transitionPromise.finished.then(() => {
      anime({
        ...exercise.animation,
        targets: this.$dot,
        update: this.onTick,
        complete: this.onExerciseFinish,
      });
    });
  };
}
