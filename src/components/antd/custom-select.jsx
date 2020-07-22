import { Select, Tooltip } from 'antd';
import React from 'react';

export function CustomSelect({ autoTooltip, children, ...others }) {
  return <Select {...others}>
    {autoTooltip ?
      React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            children: <Tooltip placement="topRight" title={child.props.children} key={child.props.children}
                               overlayClassName={'custom-tooltip'}
                               arrowPointAtCenter>{child.props.children}</Tooltip>
          });
        }
      )
      : children}
  </Select>;
}
