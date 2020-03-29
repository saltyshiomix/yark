import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../lib/theme';

const App = (props: React.PropsWithChildren<any>) => {
  const { children, ...restProps } = props;
  const PageComponent = children;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageComponent {...restProps} />
    </ThemeProvider>
  );
};

export default App;
