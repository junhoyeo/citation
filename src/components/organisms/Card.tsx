import * as React from 'react';
import styled from 'styled-components';

import Illust from '../atoms/Illust';
import {
  Text,
} from '../atoms/Text';

import planeIcon from '../../assets/icons/plane.png';
import trashIcon from '../../assets/icons/trash.png';
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
      <IconContainer>
        <IconButton
          src={planeIcon}
        />
        <IconButton
          src={trashIcon}
        />
      </IconContainer>
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
  position: relative;
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
  font-size: 0.78rem;
  font-weight: bold;
  color: #4D5189;
  line-height: 1.35;
`;

const CardSender = styled(Text)`
  font-size: 0.78rem;
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

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  height: 100%;
  align-items: center;
`;

const IconButton = styled.img`
  height: 24px;
  width: 24px;
  opacity: 50%;
  cursor: pointer;
  margin: 0.5rem;
  transition: 0.15s;

  &:last-child {
    width: 22px;
  }

  &:hover,
  &:focus {
    opacity: 65%;
    transform: scale(1.02);
  }
`;
