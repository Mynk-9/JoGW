import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import '../personal/personal.css';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  msgCard: {
    padding: '15px',
    marginTop: '15px',
    backgroundColor: '#FFD94D',
    marginRight: '3rem',
    marginLeft: '3rem',
    borderRadius: '15px',
    boxShadow: ' 10px 10px 5px grey',
  },
  cardHeaderRollNum: {
    fontSize: '17px',
    fontWeight: '700',
    padding: 0,
    marginTop: '10px',
    fontFamily: 'Roboto',
  },
  cardContent: {
    '&:last-child': {
      padding: 0,
    },
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    display: '-webkit-box',
    lineClamp: 3,
    boxOrient: 'vertical',
    fontFamily: 'Raleway',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
  },
  date: {
    margin: '20px 15px 0 0',
  },
}));

const AdminMessageCard = ({ rollNumber, message, date, index, n }) => {
  const classes = useStyles();
  if (rollNumber == null) {
    rollNumber = '2019A8PS0666G';
    date = '28th Dec 2020, 2:31 a.m.';
  }
  return (
    <React.Fragment>
      <Card className={classes.msgCard}>
        <CardHeader
          title={'To: ' + rollNumber}
          className={classes.cardHeaderRollNum}
          titleTypographyProps={{
            variant: 'paragraph',
          }}
        />
        <CardContent
          className={classes.cardContent}
          pb={0}
          component="p"
          children={message}
        />
        <div className={classes.cardFooter}>
          <p className={classes.date}>{date}</p>
          <CardActions disableSpacing>
            <IconButton>
              <CheckCircleOutlineIcon
                id="mag"
                style={{ color: index < n ? 'green' : 'red' }}
              ></CheckCircleOutlineIcon>
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default AdminMessageCard;
