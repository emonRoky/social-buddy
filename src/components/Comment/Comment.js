import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {withStyles } from '@material-ui/core/styles';
import { useState,useEffect } from 'react';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: '70px',
      height: '70px',
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
const Comment = (props) => {
    const classes = useStyles();
    const {name, email, body} = props.comment
    const [image, setImage] = useState([])
    useEffect(() => {
        const url = `https://randomuser.me/api/?results=100`
        fetch(url)
          .then(response => response.json())
          .then(data => setImage(data.results[0].picture.medium))
      }, [])
    return (
        <div className='comments-container'>
            <Card className={classes.root}>
                <CardHeader
                     avatar={
                        <StyledBadge
                          overlap="circle"
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                            }}
                          variant="dot"
                        >
                          {
                              <SmallAvatar alt={name} src={image} />
                          }
                        </StyledBadge>
                      }
                      title={name}
                      subheader={email}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Comment;