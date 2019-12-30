import * as React from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import { TextForLabel } from '../atoms/Text';

import { OnChangeEvent } from '../../utils/events';

type FieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (event: OnChangeEvent) => void;
};

export const Field: React.FC<FieldProps> = ({ label, value, placeholder = '', onChange }) => (
  <FieldContainer>
    <FieldLabel>
      {label}
    </FieldLabel>
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </FieldContainer>
);

export default Field;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const FieldLabel = styled(TextForLabel)`
  font-weight: bold;
  padding: 0 0.2rem;
  margin-bottom: 0.5rem;
`;
