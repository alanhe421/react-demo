import React from 'react';

export class NumberList extends React.PureComponent {

    render() {
        console.log('Class: NumberList, Function: render, Line 6 111(): ', 111);
        const listItems = this.props.numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
