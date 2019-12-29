import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Layout from '../../components/Layout';
import HomeRenderIndicator from './HomeRenderIndicator';

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
      <HomeRenderIndicator
        stage={stage}
        history={history}
        onNext={onClickNextStage}
      />
    </Layout>
  );
};

export default withRouter(Home);
