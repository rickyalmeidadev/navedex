import React, { InputHTMLAttributes } from 'react';

import { Wrapper, Label, Input } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Field: React.FC<IProps> = ({ label, name, children, ...rest }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input {...rest} name={name} id={name} />
      {children}
    </Wrapper>
  );
};

export default Field;
