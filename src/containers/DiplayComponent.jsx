import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
//import '../assets/styles';
import Container from '@material-ui/core/Container';
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
        <video controls ali>
          <source src={props.playing.sources} type="video/mp4" />
        </video>
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
