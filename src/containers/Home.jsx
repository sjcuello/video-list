import React, {useEffect}from 'react';
import { connect } from 'react-redux';
import useInitialState from '../hooks/useInitialState';
import { setAllVideos } from '../actions/index';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core/';
import CardItem from '../components/CardItem';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const API = "https://api.jsonbin.io/b/5ef409df2406353b2e0c4068";

const Home = (props) => {
  //const {videos} = props;
  const classes = useStyles();

  const videos = useInitialState(API);

  useEffect(()=>{
    props.setAllVideos(videos);
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

      <Grid container spacing={6}>
        {videos.map(video =>
          <Grid item xs={12} sm={6} md={3} key={video.id} className={classes.border}>
            <CardItem {...video}/>
          </Grid>
        )}
      </Grid>

    </main>
  )
}
const mapDispachToProps = {
  setAllVideos,
}

export default connect(null, mapDispachToProps)(Home);
