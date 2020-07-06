import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource,getAllRecommended } from '../actions';
import '../assets/styles/index.css';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography} from '@material-ui/core';
import NotFound from './NotFound';
import Grid from '@material-ui/core/Grid';
import ControlsComponent from './ControlsComponent';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '1%',
    marginBottom:'1%',
    alignItems: 'left',
  },
  description:{
    marginTop: '1%',
    alignItems: 'left',
    paddingRight: '10%',
    marginRight: '10%',
  }
}));

const DiplayComponent = (props) => {

  const { id } = props.match.params;
  console.log('props: ',props);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
    props.getAllRecommended(id);
  }, []);

  const classes = useStyles();
  return hasPlaying ? (
    <main>
      <Container maxWidth="md" fixed className={classes.title}>
        <Typography variant="h4" align="center" color="textPrimary" >
          {props.playing.title}
        </Typography>
      </Container>
      <Grid container spacing={3}>
        <Grid item key='video' xs={10}>
          <video>
            <source src={props.playing.sources} type="video/mp4" />
          </video>
        </Grid>
        <Grid item key='description' xs={2}>
          <Typography variant="h6" align="left" color="textSecondary" className={classes.description} paragraph >
            {props.playing.description}
          </Typography>
        </Grid>
      </Grid>
      <ControlsComponent recommended={props.recommended} {...props}/>
    </main>
    
  ) : <NotFound />;
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
    recommended: state.recommended,
  };
};

const mapDispachToProps = {
  getVideoSource,
  getAllRecommended,
}

export default connect(mapStateToProps, mapDispachToProps)(DiplayComponent); 
