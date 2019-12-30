import React, { useEffect } from 'react';
import {
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';

type RouteWrapperProps = {
  children: React.ReactNode;
  logPageView: () => void;
}

const RouteWrapper: React.FC<RouteWrapperProps & RouteComponentProps> = ({
  history, children, logPageView
}) => {
    useEffect(() => {
      history.listen(logPageView);
    }, [history, logPageView]);

    return (
      <>
        {children}
      </>
    );
  };

export default withRouter(RouteWrapper);
