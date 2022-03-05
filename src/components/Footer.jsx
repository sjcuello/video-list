import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '5%',
    backgroundColor: theme.palette.background,
    padding: theme.spacing(2),
  },
  gihub:{
    cursor: 'pointer'
  }  
  
}));

const URL = "https://github.com/sjcuello/video-list";

const Footer = () => {
  const classes = useStyles();

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <footer className={classes.footer}>
      <Typography align="center" color="textSecondary" className={classes.gihub} >
        GitHub
        {" "}
        <GitHubIcon onClick={() => openInNewTab(URL)}/>
      </Typography>
    </footer>
  )
};

export default Footer;
