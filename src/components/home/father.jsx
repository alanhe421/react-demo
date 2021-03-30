import React, { useCallback } from 'react';
import Children from './children';

const Father = () => {
  const callback = useCallback(() => console.log('Father'), []);
  return <div>
    <Children callback={callback} />
  </div>;
};

export default Father;
