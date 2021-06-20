import React from 'react';
import { DuckRuntime } from 'saga-duck';
import { MyDuck } from './test-duck';
import { Provider } from 'react-redux';

const DuckTest = ({ duck, store, dispatch }) => {
  const { selectors, creators } = duck;
  const count = selectors(store);
  return <div>
    counter:
    {
      count
    }
    <button onClick={() => dispatch(creators.add())}>
      add 1
    </button>
  </div>;
};

export function connectWithDuck(Component, Duck, extraMiddlewares = []) {
  return function ConnectedWithDuck(props) {
    const { duckRuntime, ConnectedComponent } = React.useMemo(() => {
      const duckRuntime = new DuckRuntime(
        new Duck(),
        ...extraMiddlewares
      );

      const ConnectedComponent = duckRuntime.connectRoot()(Component);
      return {
        duckRuntime,
        ConnectedComponent
      };
    }, []);

    return (
      <Provider store={duckRuntime.store}>
        <ConnectedComponent {...props} />
      </Provider>
    );
  };
}

const ConnectedComponent = connectWithDuck(DuckTest, MyDuck);

export default ConnectedComponent;
