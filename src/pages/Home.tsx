import React, { useState } from 'react';

import Layout from '../components/Layout';
import {
  TextForTitle,
  TextForParagraph,
} from '../components/atoms/Text';
import Button from '../components/atoms/Button';

interface IHomeScreenProps {
  onNext: () => void;
}

const HomeForFirstTime: React.FC<IHomeScreenProps> = ({ onNext }) => (
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

interface IRenderIndicatorProps extends IHomeScreenProps {
  stage: number;
  onNext: () => void;
}

const RenderIndicator: React.FC<IRenderIndicatorProps> = ({ stage, onNext }) => {
  switch (stage) {
    case 0:
      return (
        <HomeForFirstTime
          onNext={onNext}
        />
      );
    default:
      return null;
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
