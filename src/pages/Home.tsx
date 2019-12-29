import React, { useState } from 'react';
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

interface HomeForFirstTimeProps {
  onNext?: () => void;
}

const HomeForFirstTime: React.FC<HomeForFirstTimeProps> = ({ onNext }) => (
  <>
    <TextForTitle>
      반가워요!
    </TextForTitle>
    <TextForParagraph>
      올 한해, 수고한 사람들에게 감사장을 선물해 보세요.
    </TextForParagraph>
    <Button
      onClick={onNext}
    >
      시작하기
    </Button>
  </>
);

type HomeForDefaultProps = {
  history: History,
};

const HomeForDefault: React.FC<HomeForDefaultProps> = ({ history }) => (
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
  </>
);

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
