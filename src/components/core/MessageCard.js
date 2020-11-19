import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import {
  FlagOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  msgCard: {
    padding: '15px',
    marginTop: '15px',
    backgroundColor: '#E2E2E2',
  },
  cardHeaderRollNum: {
    fontSize: '17px',
    fontWeight: '700',
    padding: 0,
    marginTop: '10px',
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
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  date: {
    margin: '20px 15px 0 0',
  },
}));

const MessageCard = ({ rollNumber, message, date }) => {
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
          <CardActions disableSpacing>
            <IconButton>
              <ThumbUpOutlined />
            </IconButton>
            <IconButton>
              <ThumbDownOutlined />
            </IconButton>
            <IconButton>
              <FlagOutlined />
            </IconButton>
          </CardActions>
          <p className={classes.date}>{date}</p>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default MessageCard;
