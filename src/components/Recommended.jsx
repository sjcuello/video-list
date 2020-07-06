import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/index.css';
import { getAllRecommended } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '95%',
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



const Recommended = (props) => {

  useEffect(() => {
    props.getAllRecommended();
  }, []);


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.recommended.map(video => (
        
            <GridListTile key={video.id} >
              <img src={video.thumb} alt={video.title} />
              <GridListTileBar
                title={video.title}
                actionIcon={
                  <Link to={`/video/${video.id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>  
                    <IconButton aria-label={`info about ${video.title}`} className={classes.icon}>
                      <PlayArrowIcon />
                    </IconButton>
                  </Link>
                }
              />
            </GridListTile>

        ))}
      </GridList>
    </div>
  );
}

const mapStateToProps = (state) => ({
  recommended: state.recommended
})  

const mapDispachToProps = {
  getAllRecommended,
}

export default connect(mapStateToProps,mapDispachToProps)(Recommended); 