import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;


/**
 * 177
 * fetch returns a promise, eventually yields data
 * result will be there at some point in the future
 */

/**
 * 181
 * usecallback
 * bc putting fetchmovies in the depens creates an infinite loop
 * put useeffect after callback for it to work
 */