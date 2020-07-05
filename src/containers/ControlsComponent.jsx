import React from 'react';
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

const useStyles = makeStyles({
  root: {
    width: '60%',
    marginLeft: '14%',
    alignContent: 'center',
  },
  slider:{
    paddingTop:'2%',  
    width: '60%'
  }
});

function ControlsComponent() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label="PlayArrow" value="play-arrow" icon={<PlayArrowIcon />} />
      <BottomNavigationAction label="Pause" value="pause" icon={<PauseIcon />} />
      <BottomNavigationAction label="VolumeDown" value="volume-down" icon={<VolumeDownIcon />} />
      <div className={classes.slider}>
        <Slider
            value={value}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            onChange={handleChange}
            onChangeCommitted={(e, val) => {
            //alert(val);
            console.log(val);
            return val;
            }}
        />
      </div>
      <BottomNavigationAction label="Brightness" value="brightness" icon={<Brightness6Icon />} />
      <div className={classes.slider}>
        <Slider
            value={value}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            onChange={handleChange}
            onChangeCommitted={(e, val) => {
            //alert(val);
            console.log(val);
            return val;
            }}
        />
      </div>
      <BottomNavigationAction label="Contrast" value="contrast" icon={<Brightness2Icon />} />
      <div className={classes.slider}>
        <Slider
            value={value}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            onChange={handleChange}
            onChangeCommitted={(e, val) => {
            //alert(val);
            console.log(val);
            return val;
            }}
        />
      </div>
      <BottomNavigationAction label="ExpandMore" value="expand-more" icon={<ExpandMoreIcon />} />

    </BottomNavigation>
  );
}


export default ControlsComponent;
