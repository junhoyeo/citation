import * as React from 'react';
import styled from 'styled-components';

import Illust from '../atoms/Illust';

import treeIllust from '../../assets/illusts/tree.png';

export interface ICard {
  name: string;
  thanks: string;
  prefix: string;
}

export interface CardProps extends ICard {
  sender: string;
}

export const Card: React.FC<CardProps> = ({ name, thanks, prefix, sender }) => {
  return (
    <CardWrapper>
      <AbsoluteIllust
        src={treeIllust}
      />
      <CardContainer>
        {prefix} {sender}
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  position: relative;
`;

const AbsoluteIllust = styled(Illust)`
  position: absolute;
  left: 0;
`;

const CardContainer = styled.div`
`;
