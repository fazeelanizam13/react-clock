import React from 'react';
import { ClockFacePadding, ReactClockProps } from '../index';

type ClockNumbersProps = {
  padding: ClockFacePadding;
  clockNumbersStyle: ReactClockProps['clockNumbersStyle'];
}

const ClockNumbers = ({ padding, clockNumbersStyle }: ClockNumbersProps) => {
  return (
    <>
      {Array.from(Array(12).keys()).map(i => {
        const number = i === 0 ? 12 : i;

        return (
          <div
            key={number}
            style={{
              position: 'absolute',
              left: '50%',
              top: `${padding}%`,
              height: `${50 - padding}%`,
              width: 30,
              transform: `translateX(-15px) rotate(${number * 30}deg)`,
              transformOrigin: 'bottom center',
            }}
          >
            <ClockNumber
              number={number}
              style={clockNumbersStyle}
            />
          </div>
        );
      })}
    </>
  );
};

type ClockNumberProps = {
  number: number;
  style: ReactClockProps['clockNumbersStyle'];
}

const ClockNumber = ({ number, style }: ClockNumberProps) => {
  return (
    <span
      style={{
        color: 'white',
        fontSize: '1.5rem',
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `rotate(${-number * 30}deg)`,
      }}
    >
      {number}
    </span>
  );
};

export default ClockNumbers;
