import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
  }));

function CardSolo({data}) {
    const {view, setView} = useContext(DataContext)
    const {id, setId} = useContext(DataContext)
    const link = `/image/${data.image._id}`;
    return (
     <Card container justify='center'>
      <CardHeader title={data.name} />
      <Link to={link}>
        <Grid>
      <CardMedia style = {{ height: "300px" }} image={data.image.hq_image_url} />
      </Grid>
        </Link>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
        {data.location.city}, {data.location.state}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
    </Card>
    );
}

export default CardSolo