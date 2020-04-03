import React from 'react';
import {
  CssBaseline,
  Toolbar,
  Container,
} from '@material-ui/core';

const App = (props: React.PropsWithChildren<any>) => {
  const { children, ...restProps } = props;
  const PageComponent = children;

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar />
      <Container>
        <PageComponent {...restProps} />
      </Container>
    </React.Fragment>
  );
};

export default App;
