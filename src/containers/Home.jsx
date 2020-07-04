import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Container, Typography} from '@material-ui/core/';


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

const Home = () => {

  const classes = useStyles();

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
        
        <Grid item xs={4} className={classes.border}>
            uno
        </Grid>
        <Grid item xs={4} className={classes.border}>
            dos
        </Grid>
        <Grid item xs={4} className={classes.border}>
            tres
        </Grid>
      </Grid>
    </main>
  )
}



export default connect(null, null)(Home);
