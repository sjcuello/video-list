import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import {PlayArrow, PlaylistAdd} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
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
  }));


const CardItem = (props) => {

  const { id, thumb, title} = props;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/video/${id}`}>
        <CardMedia
          className={classes.cardMedia}
          image={thumb}
          title="Image title"
        />
      </Link>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p"> 
          {title} 
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
              <PlayArrow />
          </IconButton>
          <IconButton aria-label="share">
              <PlaylistAdd />
          </IconButton>
      </CardActions>
    </Card>
   
  );

}
export default CardItem;