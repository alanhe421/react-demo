import { Select } from 'antd';
import React from 'react';

export function CustomSelect({ children, ...others }) {
  return <Select {...others}>
    {children}
  </Select>;
}
