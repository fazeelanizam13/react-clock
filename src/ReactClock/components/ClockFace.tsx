import React, { ReactNode } from 'react';
import { ReactClockProps } from '..';

type ClockFaceProps = {
  size: ReactClockProps['size'];
  clockFaceStyle: ReactClockProps['clockFaceStyle'];
  children: ReactNode;
};

const ClockFace = ({ children, size: { property, value }, clockFaceStyle }: ClockFaceProps) => {
  const size =
    property === 'width'
      ? {
          width: `${value}%`,
        }
      : {
          height: `${value}%`,
        };

  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '100%',
        ...clockFaceStyle,
        position: 'relative',
        ...size,
        aspectRatio: '1',
      }}
    >
      {children}
    </div>
  );
};

export default ClockFace;
