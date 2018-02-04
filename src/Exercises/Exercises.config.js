import React from 'react';

const winWidthHalf = window.innerWidth / 2;
const winHeightHalf = window.innerHeight / 2;
const dotSize = 15;
const leftPos = -winWidthHalf + dotSize;
const rightPos = winWidthHalf - dotSize;
const topPos = -winHeightHalf + dotSize;
const bottomPos = winHeightHalf - dotSize;
const maxRadius = Math.min(winWidthHalf, winHeightHalf) - dotSize;

function mapAnimation(obj, duration) {
  return {
    ...obj,
    duration: obj.duration * 1000,
    loop: duration / obj.duration,
  };
}

const blink = {
  scale: [{value: 1.5}, {value: 1}],
  opacity: [{value: 0.5}, {value: 1}],
  duration: 2,
  easing: 'linear',
};

const upDown = {
  translateY: [{value: topPos}, {value: 0}, {value: bottomPos}, {value: 0}],
  duration: 4,
  easing: 'easeInOutSine',
};

const leftRight = {
  translateX: [{value: leftPos}, {value: 0}, {value: rightPos}, {value: 0}],
  duration: 4,
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
  duration: 5,
  easing: 'easeInOutSine',
};

const rotateRight = {
  rotate: [0, 360],
  translateY: [-maxRadius, -maxRadius],
  duration: 5,
  easing: 'linear',
};

export default [
  {
    title: 'Palming',
    subTitle: 'Place the palms gently over your eyelids',
    animation: mapAnimation(blink, 60),
  },
  {
    title: 'Close & open',
    subTitle: 'Close your eyes tightly for a second and then open',
    animation: mapAnimation(blink, 20),
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: mapAnimation(blink, 20),
  },
  {
    title: 'Up & down',
    subTitle: 'Follow the dot',
    animation: mapAnimation(upDown, 20),
  },
  {
    title: 'Right & left',
    subTitle: 'Follow the dot',
    animation: mapAnimation(leftRight, 20),
  },
  {
    title: 'Diagonal',
    subTitle: 'Follow the dot',
    animation: mapAnimation(diagonal, 20),
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: mapAnimation(blink, 10),
  },
  {
    title: 'Rotation right',
    subTitle: 'Follow the dot',
    animation: mapAnimation(rotateRight, 20),
  },
  {
    title: 'Rotation left',
    subTitle: 'Follow the dot',
    animation: {
      ...mapAnimation(
        {
          ...rotateRight,
          rotate: rotateRight.rotate.slice().reverse(),
        },
        20,
      ),
    },
  },
  {
    title: 'Blinking',
    subTitle: 'Blink very quickly',
    animation: mapAnimation(blink, 10),
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
    animation: mapAnimation(blink, 60),
  },
];
