import * as React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children?: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Layout;

const Container = styled.main`
`;
