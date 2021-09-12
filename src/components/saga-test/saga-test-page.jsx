import React, { Component } from 'react';
import { fetchUserAction2, testSaga } from '../../actions';
import { connect } from 'react-redux';
import { Button } from 'antd';
import SagaChildren from './saga-children';

let count = 0;

class SagaTestPage extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      number: 0
    };
  }

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
        <Button onClick={() =>
          this.props.fetchUserAction(++count)
        }>test render{this.state.number}</Button>
        <SagaChildren />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchUserAction2(++count).then(res => {
      console.log(res);
    });

  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps');
    this.setState({
      number: this.state.number + 1
    });
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
  fetchUserAction2
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaTestPage);
