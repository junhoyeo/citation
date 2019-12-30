import * as React from 'react';
import styled from 'styled-components';

import presentIllust from '../../assets/illusts/present.png';

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
    <CitationWrapper>
      <CitationContainer>
        <CitationContent>
          <Content>
            <CitationHeader>
              <Title>
                감사장
              </Title>
              <Receiver>
                {name}
              </Receiver>
            </CitationHeader>
            <Thanks>
              {thanks}
            </Thanks>
            <Sender>
              <SenderPrefix>
                {prefix}
              </SenderPrefix>
              <SenderName>
                {prefix ? ` ${sender}` : sender}
              </SenderName>
              {' '}
              드림
            </Sender>
          </Content>
          <Illust
            src={presentIllust}
          />
        </CitationContent>
      </CitationContainer>
    </CitationWrapper>
  );
};

export default Citation;

const CitationWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const CitationContainer = styled.div`
  height: 80%;
  width: 80%;
  margin: auto;
  background-image: linear-gradient(to top right, #8F4EFF, #6E00FF);
  position: relative;
`;

const CitationContent = styled.div`
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4.5rem 0;

  @media (max-width: 500px) {
    padding: 2.5rem 0;
  }
`;

const CitationHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Title = styled(TextForTitle)`
  color: #610eeb;
  font-size: 3.2rem;
`;

const Receiver = styled(TextForTitle)`
  word-break: keep-all;
  text-align: center;
  font-size: 2.8rem;
  margin-top: 0.8rem;
`;

const Thanks = styled(TextForParagraph)`
  word-break: keep-all;
  text-align: center;
  font-size: 1.25rem;
  width: 50%;
  margin-bottom: 3.5rem;
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: 1rem;
    width: 80%;
  }
`;

const Sender = styled(Text)`
  font-weight: 500;
  font-size: 1.8rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    text-align: center;
    word-break: keep-all;
    line-height: 1.5;
  }
`;

const SenderName = styled(Text)`
  font-weight: 700;
`;

const SenderPrefix = styled(Text)`
  font-weight: 500;
`;

const Illust = styled.img`
  position: absolute;
  height: 45vh;
  width: 45vh;
  opacity: 30%;
  top: 25%;

  @media (max-width: 500px) {
    height: 30vh;
    width: 30vh;
    top: 35%;
  }
`;
