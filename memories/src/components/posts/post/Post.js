import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size='small'>
                    <MoreHorizIcon fontSize='default' onClick={() => setCurrentId(post._id)} />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2"
                    color="textSecondary">{post.tags.map(tag => `#${tag}`)}</Typography>
            </div>

            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" clor="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    <ThumbUpAltIcon fontSize="small"
                        onClick={() => dispatch(likePost(post._id))}
                    />
                    &nbsp; {post.likeCount}
                </Button>

                <Button size="small" color="primary">
                    <DeleteIcon fontSize="small"
                        onClick={() => dispatch(deletePost(post._id))}
                    />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;