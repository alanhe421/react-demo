import { useEffect, useState } from 'react';
import React from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  useEffect(() => {
    document.title = `you click ${count} times`;
  }, [count]);
  return <div onClick={handleClick}>
    you click {count} times;
  </div>;
}
