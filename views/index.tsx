import React from 'react';
import { Button } from '@material-ui/core';

interface IndexPageProps {
  message: string;
}

const IndexPage = (props: IndexPageProps) => {
  return (
    <Button color="primary">{props.message}</Button>
  );
};

export default IndexPage;
