import React, {Component} from 'react';
import {fetchUserHistory} from '../../effects/thunk';
import {connect} from 'react-redux';

class ThunkPage extends Component {


    async componentDidMount() {
        let fetchUserHistory1 = await this.props.fetchUserHistory();
        console.log('Class: ThunkPage, Function: componentDidMount, Line 10 fetchUserHistory1(): ', fetchUserHistory1);
    }

    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}


const mapDispatchToProps = {
    fetchUserHistory
};

export default connect(
    null,
    mapDispatchToProps
)(ThunkPage);
