import React from 'react';
import { Provider } from 'react-redux';
import { DuckRuntime } from 'saga-duck';
import { MyDuck } from './test-duck';

const DuckTest = ({ duck, store, dispatch }) => {
  const { selector, creators } = duck;
  return (<div>
    counter:
    {
      selector(store).num
    }
    <button onClick={() => dispatch(creators.add())}>
      add 1
    </button>
  </div>);
};

const duckRuntime = new DuckRuntime(new MyDuck());
const ConnectedC = duckRuntime.connectRoot()(DuckTest);

const ConnectedComponent = () =>
  <Provider store={duckRuntime.store}>
    <ConnectedC />
  </Provider>;
export default ConnectedComponent;
