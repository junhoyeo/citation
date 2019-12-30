import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ToastContainer } from 'react-toastify';
import Normalize from 'react-normalize';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import {
  Create,
  Home,
  Result,
} from './pages';

import RouteWrapper from './components/RouteWrapper';

import { initializeKakaotalk } from './utils/share';

ReactGA.initialize('UA-152536759-2');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const App: React.FC = () => {
  useEffect(() => {
    initializeKakaotalk();
  }, []);

  return (
    <>
      <Normalize />
      <BrowserRouter
        basename="/citation"
      >
        <AppContainer>
          <RouteWrapper
            logPageView={logPageView}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/result/:encodedData" component={Result} />
            </Switch>
          </RouteWrapper>
          <ToastContainer />
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;
