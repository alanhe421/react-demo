import {Component} from "react";
import React from "react";

class Child extends Component {
    render() {
        return (<h3>hello {this.props.name}!!!
        </h3>);
    }

    componentWillReceiveProps() {
        console.log('参数要变');
        console.log(this.props.name);
    }
}

export default Child;
