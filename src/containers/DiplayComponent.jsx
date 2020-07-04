import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
//import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';
 
const DiplayComponent = (props) => {
 
  const {id} = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(()=>{
    props.getVideoSource(id);
  }, []);

  
  return hasPlaying ?(
    <div className="Player">
      
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4"/>
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Volverrrrr
        </button>
      </div>
      
    </div>
    
  ) : <NotFound/> ;
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
