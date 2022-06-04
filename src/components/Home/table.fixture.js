import React from 'react';

/** Display table of the game */
function Table(props) {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
}

export default Table;
