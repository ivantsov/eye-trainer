import React from 'react';

const winWidthHalf = window.innerWidth / 2;
const winHeightHalf = window.innerHeight / 2;
const dotSize = 30;
const leftPos = -winWidthHalf + dotSize;
const rightPos = winWidthHalf - dotSize;
const topPos = -winHeightHalf + dotSize;
const bottomPos = winHeightHalf - dotSize;
const maxRadius = Math.min(winWidthHalf, winHeightHalf) - dotSize;

const commonTransitionStep = {
  duration: 500,
  easing: 'easeInOutSine',
};

const blink = {
  scale: [{value: 1.5}, {value: 1}],
  opacity: [{value: 0.5}, {value: 1}],
  duration: 2 * 1000,
  easing: 'linear',
};

const upDown = {
  translateY: [
    {value: topPos},
    {value: 0, duration: 750, delay: 250},
    {value: bottomPos},
    {value: 0, duration: 750, delay: 250},
  ],
  duration: 4 * 1000,
  easing: 'easeInOutSine',
};

const leftRight = {
  translateX: [
    {value: leftPos},
    {value: 0, duration: 750, delay: 250},
    {value: rightPos},
    {value: 0, duration: 750, delay: 250},
  ],
  duration: 4 * 1000,
  easing: 'easeInOutSine',
};

const diagonal = {
  translateX: [
    {value: [leftPos, leftPos]},
    {value: rightPos},
    {value: rightPos},
    {value: leftPos},
  ],
  translateY: [
    {value: [bottomPos, topPos]},
    {value: bottomPos},
    {value: topPos},
    {value: bottomPos},
  ],
  duration: 5 * 1000,
  easing: 'easeInOutSine',
};

const rotateRight = {
  rotate: [0, 360],
  translateY: [-maxRadius, -maxRadius],
  duration: 5 * 1000,
  easing: 'linear',
};

export default [
  {
    title: 'Palming',
    subTitle: 'Place the palms gently over your eyelids',
    animation: {
      ...blink,
      loop: 60 * 1000 / blink.duration,
    },
  },
  {
    title: 'Close & open',
    subTitle: 'Close your eyes tightly for a second and then open',
    animation: {
      ...blink,
      loop: 20 * 1000 / blink.duration,
    },
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: {
      ...blink,
      loop: 20 * 1000 / blink.duration,
    },
  },
  {
    title: 'Up & down',
    subTitle: 'Follow the dot',
    animation: {
      ...upDown,
      loop: 20 * 1000 / upDown.duration,
    },
  },
  {
    title: 'Right & left',
    subTitle: 'Follow the dot',
    animation: {
      ...leftRight,
      loop: 20 * 1000 / leftRight.duration,
    },
  },
  {
    title: 'Diagonal',
    subTitle: 'Follow the dot',
    animation: {
      ...diagonal,
      loop: 20 * 1000 / diagonal.duration,
    },
    transitionStep: {
      ...commonTransitionStep,
      translateX: diagonal.translateX[0].value[0],
      translateY: diagonal.translateY[0].value[0],
    },
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: {
      ...blink,
      loop: 10 * 1000 / blink.duration,
    },
    transitionStep: {
      ...commonTransitionStep,
      translateX: 0,
      translateY: 0,
    },
  },
  {
    title: 'Rotation right',
    subTitle: 'Follow the dot',
    animation: {
      ...rotateRight,
      loop: 20 * 1000 / rotateRight.duration,
    },
    transitionStep: {
      ...commonTransitionStep,
      translateY: rotateRight.translateY[0],
    },
  },
  {
    title: 'Rotation left',
    subTitle: 'Follow the dot',
    animation: {
      ...rotateRight,
      rotate: rotateRight.rotate.slice().reverse(),
      loop: 20 * 1000 / rotateRight.duration,
    },
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: {
      ...blink,
      loop: 10 * 1000 / blink.duration,
    },
  },
  {
    title: 'Near & far focusing',
    subTitle: [
      <p key="line-1">
        Focus on an object in front of you for 10 sec, then focus on another
        distant object for 10 sec more.
      </p>,
      <p key="line-2">Repeat 3 times.</p>,
    ],
    animation: {
      ...blink,
      loop: 60 * 1000 / blink.duration,
    },
  },
];
