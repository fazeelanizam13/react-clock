import React from 'react';
import {
  ClockHandLength,
  ClockHandWidth,
  HandType,
  ReactClockProps,
  clockHandLengthDefault,
  clockHandWidthDefault,
} from '../index';

type ClockHandProps = {
  type: HandType;
  style: ReactClockProps['clockHandStyle'];
  length: ClockHandLength[HandType];
  width: ClockHandWidth[HandType];
  rotation: number;
};

const ClockHand = ({
  type,
  style,
  length = clockHandLengthDefault[type],
  width = clockHandWidthDefault[type],
  rotation,
}: ClockHandProps) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        ...style,
        position: 'absolute',
        top: `${50 - length}%`,
        left: '50%',
        height: `${length}%`,
        width: width,
        transform: `translateX(-${width / 2}px) rotate(${rotation}deg)`,
        transformOrigin: 'bottom center',
        transition: type === 'second' && rotation > 0 ? 'transform 200ms linear' : '',
      }}
    ></div>
  );
};

export default ClockHand;
