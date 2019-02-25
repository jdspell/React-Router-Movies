import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return(
    <Link to={`/moves/${props.movie.id}`}>
      <h2>{title}</h2>
    </Link>
  );
};

export default MovieCard;
