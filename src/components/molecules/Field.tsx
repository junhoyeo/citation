import * as React from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import Text from '../atoms/Text';

import { OnChangeEvent } from '../../utils/events';

type FieldProps = {
  label: string;
  value: string;
  onChange: (event: OnChangeEvent) => void;
};

export const Field: React.FC<FieldProps> = ({ label, value, onChange }) => (
  <FieldContainer>
    <FieldLabel>
      {label}
    </FieldLabel>
    <Input
      value={value}
      onChange={onChange}
    />
  </FieldContainer>
);

export default Field;

const FieldContainer = styled.div`
`;

const FieldLabel = styled(Text)`
`;
