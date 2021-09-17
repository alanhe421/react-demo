import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Select } from 'tea-component';

const options = [
  { value: 1, text: '草莓', tooltip: '甜甜甜' },
  { value: 2, text: '苹果', tooltip: '每日一苹果，医生远离我' },
  { value: 3, text: '橙子', tooltip: '丰富 VC 含量' },
  { value: 4, text: '榴莲', tooltip: '榴莲已售罄' }
];

const FormPage = () => {
  const {
    register, reset, control, getValues, formState: {
      isValid
    }
  } = useForm({
    mode: 'all',
    defaultValues: {}
  });
  const handleSubmit = useCallback(() => {
    debugger;
  }, []);
  return <div>
    <Select
      style={{ width: 200 }}
      placeholder="Select a fruit"
      options={options}
      {...register('fruit', {
        validate: (value => {
          if (value === null || value === undefined) {
            return '不能为空';
          }
          if (+value === 1) {
            return '不能选择草莓';
          }
          return undefined;
        })
      })}
    />
    <div>
      <Button onClick={handleSubmit} disabled={!isValid}>submit</Button>
    </div>
  </div>
    ;
};

export default FormPage;
