import React, { useEffect } from 'react';
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

import { initializeKakaotalk } from './utils/share';

const App: React.FC = () => {
  useEffect(() => {
    initializeKakaotalk();
  }, []);

  return (
    <>
      <Normalize />
      <BrowserRouter
        basename="/citation/"
      >
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/result/:encodedData" component={Result} />
          </Switch>
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
