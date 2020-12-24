import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import './search.css';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    float: 'right',
    width: '2rem',
    height: '2rem',
    paddingRight: '37px',
  },
  wrapper: {
    height: '2rem',
    width: '30px',
    border: 'sol',
  },
  margin: {
    margin: theme.spacing(1),
  },
  search: {
    width: '17rem',
    height: '1rem',
  },
  textField: {
    width: '25ch',
  },
}));

export default function Search() {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <div>
        <IconButton className={classes.menuButton}>
          <SearchIcon className="dussi" />
        </IconButton>
      </div>
    </div>
  );
}
