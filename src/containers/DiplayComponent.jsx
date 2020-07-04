import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/index.css';
import {Container,Typography, Box} from '@material-ui/core';
import NotFound from './NotFound';

const DiplayComponent = (props) => {

  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);


  return hasPlaying ? (
    <main>
      <Container maxWidth="sm">
        <Typography variant="h5" align="left" color="textSecondary" paragraph>
          titulo del video
          </Typography>
      </Container>
      <Box maxWidth="lg" display="flex" justifyContent="center">
        <video controls>
          <source src={props.playing.sources} type="video/mp4" />
        </video>
      </Box>
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
