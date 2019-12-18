import React from 'react';

interface IndexPageProps {
  message: string;
}

const IndexPage = (props: IndexPageProps) => {
  return <p>{props.message}</p>;
};

export default IndexPage;
