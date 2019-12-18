import React from 'react';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

interface IndexPageProps {
  message: string;
}

const IndexPage = (props: IndexPageProps) => {
  return (
    <Layout>
      <Button color="primary">{props.message}</Button>
    </Layout>
  );
};

export default IndexPage;
