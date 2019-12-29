import React from 'react';
import Normalize from 'react-normalize';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import {
  Create,
  Home,
  Result,
} from './pages';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

const AppContainer = styled.div`
`;
