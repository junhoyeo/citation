import * as React from 'react';
import styled from 'styled-components';

import {
  Card,
  CardProps,
} from '../organisms/Card';

type CardListProps = {
  cards: CardProps[];
};

export const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <CardListContainer>
      {cards.map((card, idx) => (
        <Card
          key={`card-${idx}`}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
`;
