import React from 'react';

 const Clock = ({changeDeadline}) =>  (
 
      <div>
      <button type="button" onClick={(event)=> changeDeadline(event)}>Submit</button>
      </div>
);
export default Clock;