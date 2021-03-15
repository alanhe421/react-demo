import React, { useEffect, useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [{ count }, setState] = useState({ count: 0 });
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = undefined;
    };
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setState({ count: count + 1 })}>
        Click me
      </button>
    </div>
  );
}

export default Example;
