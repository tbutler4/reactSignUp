import React from 'react';
import aqua from './img/aq.jpeg'
import './App.css';
import 'fontsource-roboto';
import {
  Card, 
  Button, 
  CardContent, 
  Typography, 
  Grid, 
  Paper, 
  AppBar, 
  Toolbar, 
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Card className={classes.root}>
        <div className={classes.Groot}>
          <Grid container spacing={3}>
            <Grid className={classes.left} item xs={6}>
              <Paper className={classes.paper}>
                <div className={classes.poop}>
                  <AppBar className={classes.yoop} position="static">
                    <Toolbar>
                      <Typography variant="h6" className={classes.title}>
                        Photgraphy
                     </Typography>
                      <IconButton className={classes.menuButton} color="black" aria-label="menu">
                        <MenuIcon />
                      </IconButton>
                    </Toolbar>
                  </AppBar>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paperRight}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                     </Typography>
                  <Typography variant="h5" component="h2">
                    belent
                     </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    adjective
                      </Typography>
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                     <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Card>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: '#00CCCC',
  },
  root: {
    marginTop: 100,
    marginLeft: 175,
    marginBottom: 100,
    height: 575,
    width: 1250,
    backgroundColor: '#EFEFFF',
    borderRadius: 25,
  },
  Groot: {
    height: 500,

  },
  paper: {
    width: 550,
    height: 580,
    backgroundImage: `url(${aqua})`
  },
  paperRight: {
    marginLeft:-86,
    width: 625,
    height: 580,
    paddingRight: 78,
  },
  poop: {
    flexGrow: 1,
  },
  yoop:{
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default App;
