import * as React from 'react';
import styled from 'styled-components';

import Illust from '../atoms/Illust';
import {
  Text,
} from '../atoms/Text';

import treeIllust from '../../assets/illusts/tree.png';

export interface ICard {
  name: string;
  thanks: string;
  prefix: string;
}

export interface CardProps extends ICard {
  cardID: number;
  sender: string;
}

export const Card: React.FC<CardProps> = ({ name, thanks, prefix, cardID, sender }) => {
  return (
    <CardWrapper>
      <CardIllust
        src={treeIllust}
      />
      <CardInfo>
        <CardIdentifier>
          {`감사장 #${cardID}`}
        </CardIdentifier>
        <CardSender>
          <TextAboutPrefix>
            {prefix}
          </TextAboutPrefix>
          {' '}{sender} 올림
        </CardSender>
        <CardReceiver>
          <TextAboutName>{name}</TextAboutName> 님께
        </CardReceiver>
      </CardInfo>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #F9F7FD;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
`;

const CardIllust = styled(Illust)`
  height: 64px;
  width: 64px;
  margin: 0;
  margin-right: 0.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardIdentifier = styled(Text)`
  font-size: 0.8rem;
  font-weight: bold;
  color: #4D5189;
  line-height: 1.35;
`;

const CardSender = styled(Text)`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.35;
`;

const TextAboutPrefix = styled(Text)`
  color: #141746;
`;

const CardReceiver = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
`;

const TextAboutName = styled(Text)`
  color: #610eeb;
`;
