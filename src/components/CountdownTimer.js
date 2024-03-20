// CountdownTimer.js
import React from 'react';

const CountdownTimer = ({ countdown, texts, timer, Paragraph }) => {
  return (
    <Paragraph>
      {`${timer} ${Math.floor(countdown / 60)}:${
        countdown % 60 < 10 ? '0' : ''
      }${countdown % 60}`}
    </Paragraph>
  );
};

export default CountdownTimer;
