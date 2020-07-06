import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Slider from "@material-ui/core/Slider";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Brightness6Icon from '@material-ui/icons/Brightness6';//brigthness
import Brightness2Icon from '@material-ui/icons/Brightness2';//contrast
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Recommended from '../components/Recommended';

const useStyles = makeStyles({
  root: {
    width: '60%',
    marginLeft: '14%',
    alignContent: 'center',
  },
  slider: {
    paddingTop: '1%',
    width: '60%',
  },
});

function ControlsComponent({recommended}) {
  
  console.log('recommended: ',recommended);

  const classes = useStyles();
  
  let video;

  useEffect(()=>{
    video = document.getElementsByTagName('video')[0];
  })

  const [valuevolume, setValueVolume] = useState(30);
  const [valuebrightness, setValueBrightness] = useState(100);
  const [valuecontrast, setValueContrast] = useState(100);

  const [checked, setChecked] = useState(false);

  const handleChangeVolume = (event, newValue) => {
    setValueVolume(newValue);
    video.volume = newValue / 100;
  };
  const handleChangeBrightness = (event, newValue) => {
    setValueBrightness(newValue);
    video.style.filter = `brightness(${newValue}%)`
  };
  const handleChangeContrast = (event, newValue) => {
    setValueContrast(newValue);
    video.style.filter = `contrast(${newValue}%)`
  };

  const handlePlay = () => video.play();


  const handlePause = () => video.pause();

  const showHideRecommended = ()=>{
    setChecked(!checked);
    if(!checked){
      console.log('por aca');
      //window.scrollTo(0,document.body.scrollHeight);
      window.scrollTo(0, 999999);
    }else{
      window.scrollTo(0,document.body.scrollTop);
    }
    
  }
  
  return (
    <>
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        label="PlayArrow"
        value="play-arrow"
        icon={<PlayArrowIcon />}
        onClick={handlePlay}
      />
      <BottomNavigationAction 
        label="Pause" 
        value="pause" 
        icon={<PauseIcon />} 
        onClick={handlePause}
      />
      <BottomNavigationAction label="VolumeDown" value="volume-down" icon={<VolumeDownIcon />} />
      <div className={classes.slider}>
        <Slider
          value={valuevolume}
          aria-labelledby="continuous-slider"
          min={0}
          max={100}
          onChange={handleChangeVolume}
          onChangeCommitted={(e, val) => {
            console.log(val);
            return val;
          }}
        />
      </div>
      <BottomNavigationAction label="Brightness" value="brightness" icon={<Brightness6Icon />} />
      <div className={classes.slider}>
        <Slider
          value={valuebrightness}
          aria-labelledby="continuous-slider"
          min={0}
          max={200}
          onChange={handleChangeBrightness}
          onChangeCommitted={(e, val) => {
            console.log(val);
            return val;
          }}
        />
      </div>
      <BottomNavigationAction label="Contrast" value="contrast" icon={<Brightness2Icon />} />
      <div className={classes.slider}>
        <Slider
          value={valuecontrast}
          aria-labelledby="continuous-slider"
          min={0}
          max={200}
          onChange={handleChangeContrast}
          onChangeCommitted={(e, val) => {
            console.log(val);
            return val;
          }}
        />
      </div>
      <BottomNavigationAction 
        label="ExpandMore" 
        value="expand-more" 
        icon={<ExpandMoreIcon />} 
        onClick={() => showHideRecommended()}
      />
    </BottomNavigation>
    {checked ?
      <Recommended recommended={recommended} />
    : null}
    </>
  );
}


export default ControlsComponent;
