import { Option } from 'antd/es/mentions';
import { Select } from 'antd';
import React from 'react';

const CountrySelector = (props = {}) => {
  const value = (typeof props.value === 'string') ? props.value.split(',') : props.value;
  const onChange = (value, option) => {
    if (value.includes('usa')) {
      console.log('can not select usa', props.value);
      props.onChange(props.value);
      return;
    }
    props.onChange(value.join(','));
    console.log(value, option);
  };
  return <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    optionLabelProp="label"
    value={value}
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
