import React, { useEffect, useState } from 'react';
import { ClockFace, ClockHand, ClockCenter, ClockNumbers } from './components';

type ClockSize = {
  property: 'width' | 'height';
  value: number;
};

export type HandType = 'hour' | 'minute' | 'second';

export type ClockHandLength = {
  [key in HandType]?: number;
};

export const clockHandLengthDefault = {
  hour: 25,
  minute: 34,
  second: 40,
};

export type ClockHandWidth = {
  [key in HandType]?: number;
};

export const clockHandWidthDefault = {
  hour: 15,
  minute: 10,
  second: 5,
};

export type ClockFacePadding = number;

const clockFacePaddingDefault = 3;

export type ReactClockProps = {
  size: ClockSize;
  clockHandLength?: ClockHandLength;
  clockHandWidth?: ClockHandWidth;
  clockFacePadding?: ClockFacePadding;
  clockFaceStyle?: React.CSSProperties;
  clockHandStyle?: React.CSSProperties;
  clockCenterStyle?: React.CSSProperties;
  clockNumbersStyle?: React.CSSProperties;
};

const ReactClock = ({
  size,
  clockHandLength = clockHandLengthDefault,
  clockHandWidth = clockHandWidthDefault,
  clockFacePadding = clockFacePaddingDefault,
  clockFaceStyle,
  clockHandStyle,
  clockCenterStyle,
  clockNumbersStyle,
}: ReactClockProps) => {
  const [time, setTime] = useState(new Date());

  const hours24 = time.getHours();
  const pm = hours24 > 12;

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = pm ? hours24 - 12 : hours24;

  const secondDegrees = (360 / 60) * seconds;
  const minuteDegrees = (360 / 60) * minutes;

  // const additionalHRotation = Math.round(((minutes / 60) * 360) / 12);

  // const hourDegrees = (360 / 12) * hours + additionalHRotation;

  const hourDegrees = ((360 / 60) * (60 * hours + minutes)) / 12;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time]);

  return (
    <ClockFace
      size={size}
      clockFaceStyle={clockFaceStyle}
    >
      <ClockHand
        type='second'
        style={clockHandStyle}
        length={clockHandLength.second}
        width={clockHandWidth.second}
        rotation={secondDegrees}
      />

      <ClockHand
        type='minute'
        style={clockHandStyle}
        length={clockHandLength.minute}
        width={clockHandWidth.minute}
        rotation={minuteDegrees}
      />

      <ClockHand
        type='hour'
        style={clockHandStyle}
        length={clockHandLength.hour}
        width={clockHandWidth.hour}
        rotation={hourDegrees}
      />

      <ClockCenter style={clockCenterStyle} />

      <ClockNumbers
        padding={clockFacePadding}
        clockNumbersStyle={clockNumbersStyle}
      />
    </ClockFace>
  );
};

export default ReactClock;
