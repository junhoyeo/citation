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
`;

const SocialImage = styled.img`
`;

const SocialDesc = styled(Text)`
`;
