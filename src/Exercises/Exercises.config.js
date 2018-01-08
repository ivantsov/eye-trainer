import React from 'react';

import styles from './Exercises.css';

export default [{
  duration: 60,
  title: 'Palming',
  subTitle: 'Place the palms gently over your eyelids',
  dotClassName: styles.palming,
}, {
  duration: 20,
  title: 'Close & open',
  subTitle: 'Close your eyes tightly for a second and then open',
  dotClassName: styles.closeTigtly,
}, {
  duration: 20,
  title: 'Blinking',
  subTitle: 'Blink very quickly',
  dotClassName: styles.blinking,
}, {
  duration: 20,
  title: 'Up & down',
  subTitle: 'Follow the dot',
  dotClassName: styles.upDown,
}, {
  duration: 20,
  title: 'Right & left',
  subTitle: 'Follow the dot',
  dotClassName: styles.leftRight,
}, {
  duration: 20,
  title: 'Diagonal',
  subTitle: 'Follow the dot',
  dotClassName: styles.diagonal,
}, {
  duration: 10,
  title: 'Blinking',
  subTitle: 'Blink very quickly',
  dotClassName: styles.blinking,
}, {
  duration: 20,
  title: 'Rotation right',
  subTitle: 'Follow the dot',
  dotClassName: styles.rotateLeft,
}, {
  duration: 20,
  title: 'Rotation left',
  subTitle: 'Follow the dot',
  dotClassName: styles.rotateRight,
}, {
  duration: 10,
  title: 'Blinking',
  subTitle: 'Blink very quickly',
  dotClassName: styles.blinking,
}, {
  duration: 60,
  title: 'Near & far focusing',
  subTitle: [
    <p key="line-1">Focus on an object in front of you for 10 sec, then focus on another distant object for 10 sec more.</p>,
    <p key="line-2">Repeat 3 times.</p>,
  ],
  dotClassName: styles.blinking,
}];
