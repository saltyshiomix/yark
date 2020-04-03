import React from 'react';
import { Http } from '../../lib/http';

const http = new Http();

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    const response = await http.post('api/auth/login', data);
    if (response.ok) {
      location.href = '/';
    } else {
      alert(`Failed to login: ${response.statusText}`);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChangeEmail}
      />
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChangePassword}
      />
      <br/>
      <input type="submit" value="LOGIN" />
    </form>
  );
};

export default LoginPage;
