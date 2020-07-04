import React, {useEffect}from 'react';
import { connect } from 'react-redux';
import useInitialState from '../hooks/useInitialState';
import { setAllVideosNew } from '../actions/index';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  border: {
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: '3px',
  }
}));

const API = "https://api.jsonbin.io/b/5ef409df2406353b2e0c4068";

const Home = (props) => {
  //const {videos} = props;
  const classes = useStyles();

  const videos = useInitialState(API);

  useEffect(()=>{
    props.setAllVideosNew(videos);
  });

  //console.log('videosss: ', videos);
  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" >
            DV Visual Control App
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Listado de videos
            </Typography>
        </Container>
      </div>

      <Grid container>
        {videos.map(video =>
          //console.log('video:', video)
          <Grid item xs={4} key={video.id} className={classes.border}>
            item
          </Grid>
        )}
      </Grid>


    </main>
  )
}

const mapStateToProps = state => {
  //console.log('state: ',state);
  //console.log('state.videos: ',state.videos);
  return {
    videos: state.videos,
  };
};


const mapDispachToProps = {
  setAllVideosNew,
}

export default connect(mapStateToProps, mapDispachToProps)(Home);
