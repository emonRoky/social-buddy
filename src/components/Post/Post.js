import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title,body,id} = props.post;
    const history = useHistory();
    const handelClick = (postId) =>{
        history.push(`/post/${postId}`)

    }
    return (
        <div className='post-container'>
             <Card style={{maxWidth:500}}>
                <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button onClick={() => handelClick(id)} size="small" color="primary">
                  See more
                </Button>
            </CardActions>
        </Card>
        </div>
    );
};

export default Post;