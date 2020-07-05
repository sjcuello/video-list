import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit'}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              DV Visual Control App
            </Typography>
          </Toolbar>
        </Link>
          
      </AppBar>
    </div>
  );
}

export default TopBar;