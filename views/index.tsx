import React from 'react';
import { Button } from '@material-ui/core';

interface IndexPageProps {
  message: string;
}

const IndexPage = (props: IndexPageProps) => {
  return <Button>{props.message}</Button>;
};

export default IndexPage;
