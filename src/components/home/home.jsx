import React from 'react';
import { Children } from './children';

class home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: Math.random() * 100
    };
  }
  render() {
    console.log('render home', this.state && this.state.name);
    return <h1>home-111
      111113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <button onClick={() => {
          this.setState(() => ({
            name: Math.random() * 100
          }));
        }}>random name
        </button>
      </div>
      <div className={'draggable'}>
        I am draggable
        <Children children={1} />
      </div>
    </h1>;
  }
}

export default home;
