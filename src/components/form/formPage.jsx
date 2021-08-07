import React, { useCallback } from 'react';
import { Button, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';

const { Option } = Select;
const FormPage = () => {
  const { register, reset, control, getValues } = useForm();
  const handleSubmit = useCallback(() => {
    console.log(getValues());
  }, []);
  return <div><Controller
    control={control}
    name={'name'}
    render={({ field, fieldState, formState }) => <Select
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      {...field}
    >
      <Option value={'1'}>Jack</Option>
      <Option value={'2'}>Lucy</Option>
      <Option value={'3'}>Tom</Option>
    </Select>}>
  </Controller>
    <div>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  </div>;
};

export default FormPage;
