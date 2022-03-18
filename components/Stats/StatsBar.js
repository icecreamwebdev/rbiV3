import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import AnimatedProgressProvider from '../../utils/AnimatedProgressProvider';
import ChangingProgressProvider from '../../utils/ChangingProgressProvider';

import { easeQuadInOut } from "d3-ease";

import React from 'react';

const StatsBar = ({duration, level, text}) => {
    return (
        <div className='w-full h-full lg:p-11 md:p-5 sm:p-12 p-8'>
            <AnimatedProgressProvider
        valueStart={0}
        valueEnd={level}
        duration={duration}
        easingFunction={easeQuadInOut}
        
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={text}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
              
            />
          );
        }}
      </AnimatedProgressProvider>
        </div>
    );
};

export default StatsBar;