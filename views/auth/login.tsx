import React from 'react';
import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
} from '@material-ui/core';
import { Http } from '../../lib/http';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(8),
    },
    container: {
      width: 480,
      margin: `${theme.spacing(2)}px auto`,
    },
    card: {
      padding: theme.spacing(4),
    },
    formControl: {
      minWidth: 320,
    },
    submitButton: {
      margin: `${theme.spacing(4)}px 0`,
    },
  }),
);

const Login = () => {
  const classes = useStyles({});
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const http = new Http();
    const response = await http.post('api/auth/login', {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });

    if (response.ok) {
      location.href = '/';
    } else {
      alert(`Failed to login: ${response.statusText}`);
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2">YARK</Typography>
      <form
        onSubmit={onSubmit}
        className={classes.container}
        autoComplete="off"
        noValidate
      >
        <Card className={classes.card}>
          <CardContent>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="email"
                name="email"
                type="text"
                label="EMAIL"
                value={email}
                onChange={onChangeEmail}
                variant="outlined"
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="password"
                name="password"
                type="password"
                label="PASSWORD"
                value={password}
                onChange={onChangePassword}
                variant="outlined"
                margin="normal"
              />
            </FormControl>
            <Button
              className={classes.submitButton}
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
            >
              LOGIN
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Login;
