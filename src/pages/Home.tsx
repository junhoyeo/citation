import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { History } from 'history';

import Layout from '../components/Layout';
import {
  Text,
  TextForTitle,
  TextForParagraph,
} from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import CardList from '../components/templates/CardList';

import { onChange, OnChangeEvent } from '../utils/events';
import Field from '../components/molecules/Field';

interface HomeForFirstTimeProps {
  onNext: () => void;
}

const HomeForFirstTime: React.FC<HomeForFirstTimeProps> = ({ onNext }) => {
  const [sender, setSender] = useState<string>('');

  const onChangeSender = (event: OnChangeEvent) =>
    onChange(event, setSender);

  const onClickSave = () => {
    localStorage.setItem('sender', sender);
    onNext();
  };

  return (
    <>
      <TextForTitle>
        반가워요!
      </TextForTitle>
      <TextForParagraph>
        올 한해, 수고한 사람들에게 감사장을 선물해 보세요.
      </TextForParagraph>
      <Field
        label="당신의 이름은"
        value={sender}
        onChange={onChangeSender}
      />
      <Button
        onClick={onClickSave}
      >
        시작하기
      </Button>
    </>
  );
};

type HomeForDefaultProps = {
  history: History,
};

const HomeForDefault: React.FC<HomeForDefaultProps> = ({ history }) => {
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

interface RenderIndicatorProps extends HomeForFirstTimeProps {
  stage: number;
  history: History;
  onNext: () => void;
}

const RenderIndicator: React.FC<RenderIndicatorProps> = ({ stage, history, onNext }) => {
  switch (stage) {
    case 0:
      return (
        <HomeForFirstTime
          onNext={onNext}
        />
      );
    default:
      return (
        <HomeForDefault
          history={history}
        />
      );
  }
};

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [stage, setStage] = useState<number>(0);
  const onClickNextStage = () => setStage(stage + 1);

  useEffect(() => {
    if (localStorage.getItem('sender')) {
      setStage(1);
    }
  }, []);

  return (
    <Layout>
      <RenderIndicator
        stage={stage}
        history={history}
        onNext={onClickNextStage}
      />
    </Layout>
  );
};

export default withRouter(Home);
