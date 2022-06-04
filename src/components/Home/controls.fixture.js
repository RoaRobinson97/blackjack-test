/* eslint-disable react/button-has-type */
import React from 'react';

/** Display controls of the game */
function Controls() {
  return (
    <div>
      <div>
        <button type="submit"> Play </button>
        <button type="reset"> Restart </button>
      </div>
      <div>
        <button type="button"> Hit </button>
        <button type="button"> Stand </button>
      </div>

    </div>
  );
}

export default Controls;
