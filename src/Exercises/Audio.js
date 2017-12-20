import React, {Component} from 'react';

import audio from './audio.wav';

export default class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.shouldPlay !== this.props.shouldPlay) {
      this.$audio.play();
    }
  }

  render() {
    return (
      <audio
        ref={$el => this.$audio = $el}
        src={audio}
      />
    );
  }
}
