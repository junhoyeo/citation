import * as React from 'react';
import styled from 'styled-components';

import {
  Card,
  ICard,
} from '../organisms/Card';

type CardListProps = {
  cards: ICard[];
  sender: string;
};

export const CardList: React.FC<CardListProps> = ({ cards, sender }) => {
  return (
    <CardListContainer>
      {cards.map(({ name, thanks, prefix }, idx) => (
        <Card
          key={`card-${idx}`}
          name={name}
          thanks={thanks}
          prefix={prefix}
          cardID={idx + 1}
          sender={sender}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;
