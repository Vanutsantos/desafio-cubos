import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import placeholder from '../../assets/images/placeholder.jpg';
import arrow from '../../assets/images/arrow-left-solid.svg';
import { Container } from '../../styles';
import {
  ArrowHome,
  MovieStyled,
  MovieHeader,
  MovieBody,
  MoviePoster,
  MovieContent,
  MovieInfo,
  Info,
  FrameBox,
  MovieGener,
  Genres,
  Punctuation
} from './style';

const Movie = () => {
  const movieId = window.location.pathname.replace('/movie/','');
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  const formatTime = (num) => {
    const h = Math.floor(num / 60);  
    const m = num % 60;
    return `${h}h ${m}min`;    
  }

  const getMovieDetail = async(id) => {
    try {
      const response = await api.get(`/movie/${id}?language=pt-BR`);
      const { data } = response;
      return data;
      
    } catch (error) {
      console.error('Movie.getMovieDetail', error)
      return null;
    }
  }

  const getMovieVideo = async(id) => {
    try {
      const response = await api.get(`/movie/${id}/videos`);
      const { data } = response;
      return data.results;

    } catch (error) {
      console.error('Movie.getMovieVideo', error)
      return null;
    }
  }

  useEffect(() =>{
    (async()=>{
      setMovie(await getMovieDetail(movieId));
      setVideos(await getMovieVideo(movieId));
    })()
  },[movieId])

  return(
    <Container>
      <Link to={'/'}><ArrowHome src={arrow} alt="Voltar para inicio"/></Link>
      {!!movie && (
        <>
          <MovieStyled>
            <MovieHeader>
              <h1>{movie.title}</h1>
              <span>{moment(new Date(movie.release_date)).format('DD/MM/YYYY')}</span>
            </MovieHeader>
            <MovieBody>
              <MovieContent>
                {!!movie.overview &&
                  <>
                    <h3>Sinopse</h3>
                    <p>{movie.overview}</p>
                  </>
                }
                <h3>Informações</h3>
                <MovieInfo>
                  {!!movie.status &&
                    <Info>
                      <h4>Situação</h4>
                      <span>{movie.status}</span>
                    </Info>
                  }
                  {!!movie.spoken_languages && !!movie.original_language &&
                    <Info>
                      <h4>Idioma</h4>
                      {movie.spoken_languages.map(i => {
                        if (i.iso_639_1 === movie.original_language) {
                          return (
                            <span key={i.iso_639_1}>{i.name}</span>
                          )
                        }
                        return false;
                      })}
                    </Info>
                  }
                  {!!movie.runtime && 
                    <Info>
                      <h4>Duração</h4>
                      <span>{formatTime(movie.runtime)}</span>
                    </Info>
                  }
                  {!!movie.budget && 
                    <Info>
                      <h4>Orçamento</h4>
                      <span>${movie.budget.toLocaleString('pt-BR')}</span>
                    </Info>
                  }
                  {!!movie.revenue && 
                    <Info>
                      <h4>Receita</h4>
                      <span>${movie.revenue.toLocaleString('pt-BR')}</span>
                    </Info>
                  }
                </MovieInfo>
                <MovieGener>
                  <Genres>
                    {!!movie.genres.length && movie.genres.map(gener => (
                      <span key={gener.id}>{gener.name}</span>
                    ))}
                  </Genres>
                  {!!movie.vote_average && 
                    <Punctuation>
                      <span>{movie.vote_average}</span>
                    </Punctuation>
                  }
                </MovieGener>
              </MovieContent>
              <MoviePoster>
                <img src={`${movie.poster_path ? `http://image.tmdb.org/t/p/w185/${movie.poster_path}`: placeholder }`} alt={`Poster - ${movie.poster_path}`} />
              </MoviePoster>
            </MovieBody>
          </MovieStyled>
          {!!videos && videos.map(video => {
            if(video.site === 'YouTube'){
              return(
                <FrameBox key={video.id}>
                  <h2>{video.type}</h2>
                  <iframe
                    title={`${video.type} - ${video.name}`}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture" 
                  />
                </FrameBox>
              )
            }
            return null;
          })}
        </>
      )}
    </Container>
  )
}

export default Movie;