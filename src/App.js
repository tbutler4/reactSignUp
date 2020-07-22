import React, { useState } from 'react';
import aqua from './img/aq.jpeg'
import './App.css';
import 'fontsource-roboto';
import {
  TextField,
  Card, 
  Radio,
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
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [name, setName] = useState('Full Name');
  const [email, setEmail] = useState('Email');
  const [date, setDate] = useState('May, 25, 1977');
  const [city, setCity] = useState('City');
  const [country, setCountry] = useState('Country');
  const [subscription, setSubscription] = useState('');
  const [thing, setThing] = useState('');

  function handleName(e) {
    setName(e.target.value);
    console.log(name)
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email)
  }
  function handleDate(e) {
    setDate(e.target.value);
    console.log(date)
  }
  function handleCity(e) {
    setCity(e.target.value);
    console.log(city)
  }
  function handleCountry(e) {
    setCountry(e.target.value);
    console.log(country)
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
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
                  <p style={{ color: '#00CCCC', textAlign: 'center', fontSize: 24, marginTop: -15 }}>Registration</p>
                  <form className={classes.oot} noValidate autoComplete="off">
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 8 }}
                      placeholder={name}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleName}
                    />
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 8 }}
                      placeholder={email}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleEmail}
                    />
                    <Radio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                      onClick={() => setThing('Male')}
                    />Male
                    <Radio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'B' }}
                      onClick={() => setThing('Female')}
                    />Female
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 8 }}
                      placeholder={date}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleDate}
                    />
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 8 }}
                      placeholder={city}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleCity}
                    />
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 8, marginBottom: 25}}
                      placeholder={country}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleCountry}
                    />
                    Subscription<Button className={classes.button} color="secondary" onClick={() => setSubscription('Bronze')}>Bronze</Button>
                    <Button color="secondary" onClick={() => setSubscription('Silver')} >Silver</Button>
                    <Button color="secondary" onClick={() => setSubscription('Gold')}>Gold</Button>
                    <br/>
                    <Button variant="contained" size="medium" color="primary" className={classes.confirm}>
                      Cancel
                    </Button>
                    <Button variant="contained" size="medium" color="primary" 
                    onClick={() => window.alert(`
                    Name: ${name}
                    Email: ${email}
                    Gender: ${thing}
                    Date: ${date}
                    City: ${city}
                    Country: ${country}
                    Subscription: ${subscription}
                    `)}
                    >
                      Confirm
                    </Button>
                  </form>
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
  button: {
    marginLeft: 100,
  },
  confirm: {
    marginLeft: 200,
    marginRight: 20,
  },
}));

export default App;
