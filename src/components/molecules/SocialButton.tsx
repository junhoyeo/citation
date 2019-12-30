import * as React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

type SocialButtonProps = {
  buttonID?: string;
  name: string;
  source: string;
  onClick?: () => void;
};

export const SocialButton: React.FC<SocialButtonProps> = ({ buttonID = '', name, source, onClick }) => (
  <SocialContainer
    id={buttonID}
    onClick={onClick}
  >
    <SocialImage
      src={source}
    />
    <SocialDesc>
      {name}
    </SocialDesc>
  </SocialContainer>
);

export default SocialButton;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #f8f9fa;
  }
`;

const SocialImage = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 0.8rem;
`;

const SocialDesc = styled(Text)`
  font-size: 0.9rem;
  font-weight: bold;
`;
