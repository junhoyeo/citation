import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { History } from 'history';

import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import Illust from '../../components/atoms/Illust';
import {
  Text,
  TextForTitle,
} from '../../components/atoms/Text';
import { ICard } from '../../components/organisms/Card';
import CardList from '../../components/templates/CardList';

import partyIllust from '../../assets/illusts/party.png';

export type HomeForDefaultProps = {
  history: History,
};

export const HomeForDefault: React.FC<HomeForDefaultProps> = ({ history }) => {
  const [sender, setSender] = useState<string>('');
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const storedSender = localStorage.getItem('sender');
    if (storedSender) {
      setSender(storedSender);
    } else {
      window.location.reload();
    }

    const storedData = localStorage.getItem('cards');
    if (storedData) {
      setCards(JSON.parse(storedData) as ICard[]);
    }
  }, []);

  const onClickReset = () => {
    const confirm = window.confirm(
      '정말로 초기화하시겠습니까? 저장된 이름과 감사장 정보가 모두 삭제됩니다.',
    );

    if (confirm) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <>
      <RelativeHeader>
        <TextForTitle>
          지금까지<br />
          총{' '}
          <TextAboutNumber>
            {cards.length.toLocaleString()}
          </TextAboutNumber>
          장의<br />
          감사장을<br />
          보내셨네요!
        </TextForTitle>
        <AbsoluteIllust
          src={partyIllust}
        />
      </RelativeHeader>
      <CardList
        cards={cards}
        sender={sender}
      />
      <ButtonList>
        <Button
          onClick={() => history.push('/create')}
        >
          감사장 선물하기
        </Button>
        <Button
          onClick={onClickReset}
          primary={false}
        >
          초기화
        </Button>
      </ButtonList>
    </>
  );
};

export default HomeForDefault;

const RelativeHeader = styled(Header)`
  position: relative;

  @media (max-width: 500px) {
    position: unset;
  }
`;

const TextAboutNumber = styled(Text)`
  color: #6C14FF;
`;

const AbsoluteIllust = styled(Illust)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  margin: 0;

  @media (max-width: 500px) {
    top: 20px;
    right: -60px;
  }
`;

const ButtonList = styled.div`
  position: fixed;
  bottom: 0;
  width: 400px;
  margin-bottom: 1.5rem;

  @media (max-width: 500px) {
    width: 80%;
  }
`;
