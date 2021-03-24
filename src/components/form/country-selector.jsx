import { Option } from 'antd/es/mentions';
import { Select } from 'antd';
import React, { useState } from 'react';

const CountrySelector = (props = {}) => {
  const defaultValue = (typeof props.value === 'string') ? props.value.split(',') : props.value;
  const [value] = useState(defaultValue);
  const onChange = (value) => {
    props.onChange(value.join(','));
    console.log(value);
  };
  return <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    optionLabelProp="label"
    defaultValue={value}
    onChange={onChange}
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>;
};

export default CountrySelector;
