import React from 'react';

const Leading=({leading0,days,hours,minutes,seconds}) => (
	<div>
		<div className="Clock-days">{leading0(days)} days</div>
		<div className="Clock-hours">{leading0(hours)} hours</div>
		<div className="Clock-minutes">{leading0(minutes)} minutes</div>
		<div className="Clock-seconds">{leading0(seconds)} seconds</div>
    </div>
);

export default Leading;