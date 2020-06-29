import React from 'react';
import StarRatings from 'react-star-ratings';

export const RatedStars = (props) => {
    return (
        <StarRatings
                  rating={props.rating}
                  starRatedColor="orange"
                  starEmptyColor="grey"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
    )
}