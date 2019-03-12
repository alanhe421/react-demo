import React from 'react';

export class UserNote extends React.Component {


    constructor(props, context) {
        super(props, context);
    }

    sayHello() {
        alert('I am note!');
    }

    render() {
        return (
            <textarea placeholder={'write something'}>
        </textarea>);
    }
}
