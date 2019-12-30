import * as React from 'react';
import styled from 'styled-components';

import {
  TextForParagraph,
} from '../atoms/Text';
import {
  Card,
  ICard,
} from '../organisms/Card';

type CardListProps = {
  cards: ICard[];
  sender: string;
  onClickPlane: (card: ICard) => void;
  onClickTrash: (cardID: number) => void;
};

export const CardList: React.FC<CardListProps> = ({
  cards, sender, onClickPlane, onClickTrash
}) => {
    if (!cards.length) {
      return (
        <CardListContainer>
          <TextForEmpty>
            보낸 감사장이 없어요.
          </TextForEmpty>
        </CardListContainer>
      );
    }
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
            onClickPlane={onClickPlane}
            onClickTrash={onClickTrash}
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

const TextForEmpty = styled(TextForParagraph)`
  text-align: center;
`;
