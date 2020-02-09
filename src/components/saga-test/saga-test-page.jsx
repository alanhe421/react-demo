import React, { Component } from 'react';
import { fetchUserAction, testSaga } from '../../actions';
import { connect } from 'react-redux';
import { Button } from 'antd';

let count = 0;

class SagaTestPage extends Component {


  render() {
    return (
      <div style={{ fontSize: 28 }}>
        SagaTest
        {this.props.books.map(item => <h3 key={item.title}>{JSON.stringify(item)}</h3>)}
        <div>
          user info
        </div>
        <div>
          {JSON.stringify(this.props.user)}
        </div>
        <Button onClick={() => this.getFetchUserAction()}>re fetch</Button>
      </div>
    );
  }

  getFetchUserAction() {
    this.props.fetchUserAction(++count);
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    user: state.user
  };
};

const mapDispatchToProps = {
  testSaga,
  fetchUserAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaTestPage);
