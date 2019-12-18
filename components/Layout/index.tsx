import React from 'react';
import {
  CssBaseline,
  Toolbar,
  Container,
} from '@material-ui/core';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar />
      <Container>
        {children}
      </Container>
    </React.Fragment>
  );
};

export default Layout;
