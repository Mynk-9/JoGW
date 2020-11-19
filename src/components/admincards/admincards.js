import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  margi: {
    borderRadius: '15px',
    backgroundColor: ' #E7B8B8',
  },
  Gin: {
    marginTop: '8px',
    marginRight: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  jojo: {
    margin: '10px',
  },
  jin: {
    marginTop: '8px',
  },
}));

export default function AdminCards() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [n, setn] = useState(' ');
  const list = [
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. ',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her. Money witty books nor son add',
    'Whether article spirits new her covered hastily sitting her.',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
    ' Money witty books nor son add',
  ];

  const handleChange10 = (event) => {
    if (checked1 == true) {
      setChecked1(!checked1);
    }
    setChecked(!checked);
    if (event.target.checked == true) {
      setn(10);
    } else setn(0);
  };

  const handleChange20 = (event) => {
    if (checked == true) {
      setChecked(!checked);
    }
    setChecked1(event.target.checked);
    if (event.target.checked == true) {
      setn(25);
    } else setn(0);
  };

  const [value, setValue] = useState(' ');

  const handleChangeinput = (event) => {
    if (checked == true) {
      setChecked(!checked);
    }
    if (checked1 == true) {
      setChecked1(!checked1);
    }

    setValue(event.target.value);
    if (value == ' ') {
      setn(30);
    }
    setn(event.target.value);
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        <Box p={1} flexGrow={1} marginLeft="190px" marginTop="7.5px">
          <b>Select</b>
        </Box>
        <Box p={1} flexGrow={1}>
          <b>First 10</b>
          <Checkbox
            checked={checked}
            name="hel"
            onChange={handleChange10}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Box>
        <Box p={1} flexGrow={1}>
          <b>First 25</b>
          <Checkbox
            checked={checked1}
            onChange={handleChange20}
            color="primary"
            name="hel"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Box>
        <Box p={1} flexGrow={1} marginTop="7.5px">
          <b>First </b>
          <TextField
            id="standard-multiline-flexible"
            multiline
            rowsMax={4}
            value={value}
            name="hel"
            onChange={handleChangeinput}
          />
        </Box>
      </Box>

      {list.slice(0, 50).map((text, index) => (
        <Grid container direction={'column'} className={classes.jojo}>
          <Container className={classes.margi}>
            <Grid container direction={'row'}>
              <Grid item xs lg={2} className={classes.Gin}>
                <Typography variant="h6" edge="start">
                  <b>{text}</b>
                </Typography>
              </Grid>

              <Grid item xs className={classes.jin}>
                <Typography variant="h6">
                  <b>...</b>
                </Typography>
              </Grid>
              <Grid item xs alignContent="flex-end"></Grid>
              <IconButton
                style={{ backgroundColor: index < n ? 'green' : 'red' }}
              >
                <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
              </IconButton>
            </Grid>
          </Container>
        </Grid>
      ))}
    </React.Fragment>
  );
}
