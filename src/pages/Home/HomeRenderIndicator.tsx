import * as React from 'react';

import {
  HomeForDefault,
  HomeForDefaultProps,
} from './HomeForDefault';
import {
  HomeForFirstTime,
  HomeForFirstTimeProps,
} from './HomeForFirstTime';

interface HomeRenderIndicatorProps extends
  HomeForDefaultProps, HomeForFirstTimeProps {
    stage: number;
  }

export const HomeRenderIndicator: React.FC<HomeRenderIndicatorProps> = ({ stage, history, onNext }) => {
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

export default HomeRenderIndicator;
