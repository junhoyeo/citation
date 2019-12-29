import React, { useState } from 'react';

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

const HomeForDefault: React.FC = () => (
  <>
    <TextForTitle>
      지금까지 총 <Text>0</Text>장의 감사장을 보내셨네요!
    </TextForTitle>
    <CardList
      cards={[]}
    />
    <Button>
      감사장 선물하기
    </Button>
  </>
);

interface RenderIndicatorProps extends HomeForFirstTimeProps {
  stage: number;
  onNext: () => void;
}

const RenderIndicator: React.FC<RenderIndicatorProps> = ({ stage, onNext }) => {
  switch (stage) {
    case 0:
      return (
        <HomeForFirstTime
          onNext={onNext}
        />
      );
    default:
      return (
        <HomeForDefault />
      );
  }
};

const Home: React.FC = () => {
  const [stage, setStage] = useState<number>(0);
  const onClickNextStage = () => setStage(stage + 1);

  return (
    <Layout>
      <RenderIndicator
        stage={stage}
        onNext={onClickNextStage}
      />
    </Layout>
  );
};

export default Home;
