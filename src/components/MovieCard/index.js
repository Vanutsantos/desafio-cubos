import React from 'react';
import moment from 'moment';
import placeholder from '../../assets/images/placeholder.jpg';
import { 
  CardStyled,
  PosterBox,
  CardInfo,
  CardHeader,
  Punctuation,
  CardBody,
  CardContent,
  Categories
} from './style';

const MovieCard = ({content, genres}) => {
  let moviePoster = '';
  let release = moment(new Date(content.release_date)).format('DD/MM/YYYY');

  if (!!content.poster_path) {
    moviePoster = `http://image.tmdb.org/t/p/w185/${content.poster_path}`;
  } else {
    moviePoster = placeholder;
  }

  return(
    <CardStyled to={`/movie/${content.id}`}>
      <PosterBox>
        <img src={moviePoster} alt={`Poster - ${content.title}`} />
      </PosterBox>
      <CardInfo>
        <CardHeader>
          <h2>{content.title}</h2>
          <Punctuation>
            <span>{content.vote_average}</span>
          </Punctuation>
        </CardHeader>
        <CardBody>
          <span>{release}</span>
          <CardContent>
            {!!content.overview &&
              <p>{content.overview}</p>
            }
            <Categories>
              {genres.map(gener => {
                if(content.genre_ids.includes(gener.id)){
                  return(
                    <span key={gener.id}>{gener.name}</span>
                  );
                }
                return null;
              })}
            </Categories>
          </CardContent>
        </CardBody>
      </CardInfo>
    </CardStyled>
  )
};

export default MovieCard;