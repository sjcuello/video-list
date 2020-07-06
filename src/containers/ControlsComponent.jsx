import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Slider } from '@material-ui/core';
import { PlayArrow, Pause, Brightness6,
         Brightness2, VolumeDown, ExpandMore } from '@material-ui/icons';
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

function ControlsComponent(props) {

  const classes = useStyles();

  let video;

  useEffect(() => {
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

  const showHideRecommended = () => {
    setChecked(!checked);
    if (!checked) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0, document.body.scrollTop);
    }

  }

  return (
    <>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction
          label="PlayArrow"
          value="play-arrow"
          icon={<PlayArrow />}
          onClick={handlePlay}
        />
        <BottomNavigationAction
          label="Pause"
          value="pause"
          icon={<Pause />}
          onClick={handlePause}
        />
        <BottomNavigationAction label="VolumeDown" value="volume-down" icon={<VolumeDown />} />
        <div className={classes.slider}>
          <Slider
            value={valuevolume}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            onChange={handleChangeVolume}
          />
        </div>
        <BottomNavigationAction label="Brightness" value="brightness" icon={<Brightness6 />} />
        <div className={classes.slider}>
          <Slider
            value={valuebrightness}
            aria-labelledby="continuous-slider"
            min={0}
            max={200}
            onChange={handleChangeBrightness}
          />
        </div>
        <BottomNavigationAction label="Contrast" value="contrast" icon={<Brightness2 />} />
        <div className={classes.slider}>
          <Slider
            value={valuecontrast}
            aria-labelledby="continuous-slider"
            min={0}
            max={200}
            onChange={handleChangeContrast}
          />
        </div>
        <BottomNavigationAction
          label="ExpandMore"
          value="expand-more"
          icon={<ExpandMore />}
          onClick={() => showHideRecommended()}
        />
      </BottomNavigation>
      {checked ?
        <Recommended {...props} />
        : null}
    </>
  );
}


export default ControlsComponent;
