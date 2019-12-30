import * as React from 'react';
import styled from 'styled-components';

import Text from '../atoms/Text';

import editIcon from '../../assets/icons/edit.png';

type CreateButtonProps = {
  onClick: () => void;
};

export const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => (
  <CreateContainer>
    <CreateText>
      직접 만들기
    </CreateText>
    <Button
      onClick={onClick}
    >
      <ButtonImage
        src={editIcon}
      />
    </Button>
  </CreateContainer>
);

export default CreateButton;

const CreateContainer = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
`;

const CreateText = styled(Text)`
  background-color: white;
  padding: 0.8rem;
  font-weight: bold;
  border-radius: 18px;
  box-shadow: 0px 10px 32px -12px rgba(0,0,0,0.24);
  padding-right: 30px;
  margin-right: -20px;
  font-size: 0.9rem;
`;

const Button = styled.div`
  background-color: #6C14FF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 10px 32px -12px rgba(0,0,0,0.24);

  &:hover,
  &:focus {
    background-color: #610eeb;
  }
`;

const ButtonImage = styled.img`
  width: 32px;
  height: 28.4375px;
`;
