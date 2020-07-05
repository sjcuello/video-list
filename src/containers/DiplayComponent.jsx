import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/index.css';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography, Box} from '@material-ui/core';
import NotFound from './NotFound';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '1%',
    marginBottom:'1%',
    alignItems: 'left',
  },
  description:{
    marginTop: '1%',
    alignItems: 'left',
  }
}));

const DiplayComponent = (props) => {

  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  console.log('props.playing: ',props.playing);

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  const classes = useStyles();
  return hasPlaying ? (
    <main>
      <Container maxWidth="md" fixed className={classes.title}>
        <Typography variant="h4" align="center" color="textPrimary" >
          {props.playing.title}
        </Typography>
      </Container>
      <Box maxWidth="lg" display="flex" justifyContent="center">
        <video controls>
          <source src={props.playing.sources} type="video/mp4" />
        </video>
      </Box>
      <Container maxWidth="md" fixed className={classes.description}>
        <Typography variant="h6" align="left" color="textSecondary" paragraph >
          {props.playing.description}
        </Typography>
      </Container>
    </main>

  ) : <NotFound />;
}

// Se usa para buscar el item por el id
const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

//Se usa para recuperar el valor de redux
const mapDispachToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispachToProps)(DiplayComponent); 
