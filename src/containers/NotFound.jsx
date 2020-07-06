import React from 'react';
import {Container, Typography } from '@material-ui/core/';

const NotFound = (props) => {
  return (
    <div >
    <Container maxWidth="sm">
      <Typography 
        component="h1" 
        variant="h2" 
        align="center" 
        color="textPrimary" 
      >
        Video Not Found !
      </Typography>
      <Typography 
        variant="h5" 
        align="center" 
        color="textSecondary" 
        paragraph
        onClick={()=> props.history.goBack()}
      >
        Back to Home
      </Typography>
    </Container>
  </div>
  )
}

export default NotFound;
