import * as React from 'react';
import { History } from 'history';

import {
  Text,
  TextForTitle,
} from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';
import CardList from '../../components/templates/CardList';

export type HomeForDefaultProps = {
  history: History,
};

export const HomeForDefault: React.FC<HomeForDefaultProps> = ({ history }) => {
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
      <TextForTitle>
        지금까지 총 <Text>0</Text>장의 감사장을 보내셨네요!
      </TextForTitle>
      <CardList
        cards={[]}
      />
      <Button
        onClick={() => history.push('/create')}
      >
        감사장 선물하기
      </Button>
      <Button
        onClick={onClickReset}
      >
        초기화
      </Button>
    </>
  );
};

export default HomeForDefault;
