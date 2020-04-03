import React from 'react';
import { Http } from '../lib/http';

interface AppProps {
  message: string;
}

const IndexPage = (props: AppProps) => {
  const logout = async () => {
    const http = new Http();
    const response = await http.post('api/auth/logout');
    if (response.ok) {
      location.href = '/login';
    } else {
      alert(`Failed to logout: ${response.statusText}`);
    }
  };

  return (
    <React.Fragment>
      <p>{props.message}</p>
      <hr />
      <a onClick={logout}>Logout</a>
    </React.Fragment>
  );
};

export default IndexPage;
