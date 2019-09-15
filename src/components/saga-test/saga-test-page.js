import React, {Component} from 'react';
import {fetchUserAction, testSaga} from '../../actions';
import {connect} from 'react-redux';

class SagaTestPage extends Component {

    componentDidMount() {
        // this.props.testSaga();
        this.props.fetchUserAction();
    }

    render() {
        return (
            <div style={{fontSize: 28}}>
                SagaTest
                {this.props.books.map(item => <h3 key={item.title}>{JSON.stringify(item)}</h3>)}
                <div>
                    hello world-alan-2222
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
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
