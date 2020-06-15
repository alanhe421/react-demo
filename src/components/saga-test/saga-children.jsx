import React, { Component } from 'react';


class SagaChildren extends Component {

  render() {
    return (
      <div style={{ fontSize: 28 }}>
        SagaChildren
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps');
  }
}


export default SagaChildren;
