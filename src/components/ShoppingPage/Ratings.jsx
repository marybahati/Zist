import React from 'react';
import StarRatings from 'react-star-ratings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: ' #fff 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
}))

export const RatedStars = (props) => {
    const classes = useStyles()
    return (
            <StarRatings
                  rating={props.rating}
                  starRatedColor="orange"
                  starEmptyColor="grey"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                  className={classes.root}
                />
    )
}