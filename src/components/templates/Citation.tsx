import * as React from 'react';
import styled from 'styled-components';

import {
  Text,
  TextForTitle,
  TextForParagraph,
} from '../atoms/Text';

type CitationProps = {
  name: string;
  thanks: string;
  prefix?: string;
  sender: string;
};

export const Citation: React.FC<CitationProps> = ({ name, thanks, prefix = '', sender }) => {
  return (
    <CitationContainer>
      <Title>
        감사장
      </Title>
      <Receiver>
        {name}
      </Receiver>
      <Thanks>
        {thanks}
      </Thanks>
      <Sender>
        <SenderPrefix>
          {prefix}
        </SenderPrefix>
        {prefix ? ` ${sender}` : sender}
      </Sender>
    </CitationContainer>
  );
};

export default Citation;

const CitationContainer = styled.div`
`;

const Title = styled(TextForTitle)`
`;

const Receiver = styled(TextForTitle)`
`;

const Thanks = styled(TextForParagraph)`
`;

const Sender = styled(Text)`
`;

const SenderPrefix = styled(Text)`
`;
