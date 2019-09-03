import React, {Component} from 'react';
import {testSaga} from '../../actions';
import {connect} from 'react-redux';

class SagaTestPage extends Component {

    componentDidMount() {
        this.props.testSaga();
    }

    render() {
        return (
            <div>
                SagaTest
                {this.props.books.map(item => <h3 key={item.title}>{JSON.stringify(item)}</h3>)}
                <div>
                    hello world
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

const mapDispatchToProps = {testSaga};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SagaTestPage);
