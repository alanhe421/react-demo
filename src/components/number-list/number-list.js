import React from 'react';
export function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
