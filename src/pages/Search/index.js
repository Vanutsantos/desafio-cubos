import React, {useEffect, useState} from 'react';
import { Container } from '../../styles';
import api from '../../services/api';
import MovieCard from '../../components/MovieCard';
import ReactPaginate from 'react-paginate';
import { SearchBar, MoviesList } from './style';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchContent, setSearchContent] = useState('batman');
  const [countPage, setCountPage] = useState(0);  
  const [page, setPage] = useState(1);
  const [slice, setSlice] = useState(0);
  const [genres, setGenres] = useState(null);

  const perPage = 5;

  const getCategories = async() => {
    try {
      const response = await api.get(`/genre/movie/list?language=pt-BR`)
      const {data} = response;

      return data.genres;

    } catch (error) {
      console.error('Search.getCategories.', error);
      return null;
    }
  }

  const getPagination = total => {
    let temp = [];
    let x = 0;
    let y = 1;

    const resPages = total / perPage;
    const totalPages  = Number.isInteger(resPages) ? resPages : resPages + 1;

    while (x <= 15 && y <= totalPages) {
      temp.push({
        page: y,
        slice: x
      });
      x+=5;
      y+=1;
      if (x > 15 && y <= totalPages) {
        x = 0;
      }
    }
    return temp;
  }

  const searchMoviesByName = async(query, pageNum) => {
    try {
      setMovies([]);
      const response = await api.get(`search/movie?query=${query}&language=pt-BR&page=${pageNum}`)
      const {data} = response;

      setMovies(data.results);
      setCountPage(getPagination(data.total_results));
    } catch (error) {
      console.error('Search.searchMoviesByName.', error);
    }
  } 

  const changePage = obj => {
    const pageInfo = countPage[obj.selected];
    const requestPage = Math.ceil((pageInfo.page *5) / 20);

    if(page !== requestPage){
      setPage(requestPage);
      searchMoviesByName(searchContent, requestPage);
    }

    setSlice(pageInfo.slice);
  }

  const enterSub = e => {
    if (e.key === "Enter") {
      setSlice(0);
      searchMoviesByName(searchContent, 1);
    }
  }

  useEffect(() => {
    (async()=>{
      setGenres(await getCategories());
    })()
  },[])

  return(
    <Container>
      <SearchBar
        onChange={e => setSearchContent(e.target.value)}
        name="query"
        placeholder="Busque um filme por nome..."
        onKeyUp={e => enterSub(e)}
      />
      <MoviesList>
        {searchContent !== null && !!movies.length && genres !== null && movies.slice(slice, slice + 5).map(item => (
          <MovieCard 
            key={item.id} 
            content={item} 
            genres={genres}
          />
        ))}
      </MoviesList>
      {!!countPage &&  (
        <ReactPaginate
          containerClassName={'pagination'}
          pageCount={countPage.length}
          pageRangeDisplayed={4}
          marginPagesDisplayed={0}
          nextClassName={'btn-next'}
          previousClassName={'btn-prev'}
          breakClassName={'btn-break'}
          onPageChange={e => {
            changePage(e)}
          }
        />
      )}
    </Container>
  )
}

export default Search;