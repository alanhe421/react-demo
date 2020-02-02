import React, { Component } from 'react';
import { fetchUserAction2, testSaga } from '../../actions';
import { connect } from 'react-redux';
import { fetchUser } from '../../effects/thunk';
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

  async getFetchUserAction() {
    const res = await this.props.fetchUserAction2(++count);
    console.log(2);
    return res;
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
  fetchUserAction2,
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaTestPage);
