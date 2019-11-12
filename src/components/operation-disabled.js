import React from 'react';

const OperationDisabled = props =>
    <div style={props.disabled ? {pointerEvents: 'none', opacity: '0.4'} : {}}>
        {props.children}</div>;
export default OperationDisabled;
