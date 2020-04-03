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
} from '@material-ui/core';
import { Http } from '../lib/http';

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
  }),
);

interface IndexPageProps {
  message: string;
}

const IndexPage = (props: IndexPageProps) => {
  const classes = useStyles({});

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const http = new Http();
    const response = await http.post('api/auth/logout');
    if (response.ok) {
      location.href = '/login';
    } else {
      alert(`Failed to logout: ${response.statusText}`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1">
              {props.message}
            </Typography>
            <br />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              onClick={onClick}
            >
              LOGOUT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndexPage;
