import React from 'react';
import ReactClock from './index';
export default {
  title: 'ReactClock',
};
export const Clock = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ReactClock size={{ property: 'width', value: 50 }} />
    </div>
  );
};
