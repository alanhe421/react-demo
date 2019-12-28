import React from 'react';

const OperationDisabled = props =>
    <div style={props.disabled ? {pointerEvents: 'none'} : {}}>
        {props.children}</div>;
export default OperationDisabled;
