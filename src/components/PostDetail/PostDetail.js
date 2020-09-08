import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Accordion } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import Comment from '../Comment/Comment';

const PostDetail = () => {
  const {postId} = useParams()
  const[post,setpost] = useState([]);
  const[postImg,setpostImg] = useState([]);
  const[comment,setComment] = useState([]);

  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>  setpost(data))
  },[postId]);

  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/photos/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>  setpostImg(data))
  },[postId]);

  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComment(data))
  },[postId]);

    return (
        <div className='post-container'>
             <Card style={{maxWidth:500}}>
                <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={postImg.url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {post.body}
                </Typography>
                </CardContent>
                </CardActionArea>
                
            <Accordion defaultExpanded color='inherit'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div >
                  <Typography >{comment.length} Comments</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div >
                {
                  comment.map(cmnt => <Comment comment={cmnt} key={cmnt.id}></Comment>)
                }
                </div>
              </AccordionDetails>
              <Divider />
            </Accordion>
        </Card>
        </div>
    );
};

export default PostDetail;