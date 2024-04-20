import React from 'react';
import { ReactClockProps } from '../index';

type ClockCenterProps = { style: ReactClockProps['clockCenterStyle'] }

const ClockCenter = ({ style }: ClockCenterProps) => {
  const width = style ? (style.width ? (Number(style.width) ? Number(style.width) : 30) : 30) : 30;

  return (
    <div
      style={{
        backgroundColor: 'teal',
        borderRadius: '100%',
        ...style,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width,
        aspectRatio: '1',
        transform: `translate(-${width / 2}px, -${width / 2}px)`,
      }}
    ></div>
  );
};

export default ClockCenter;

