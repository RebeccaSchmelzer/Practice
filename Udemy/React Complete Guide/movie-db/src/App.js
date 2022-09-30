import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

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
function App() {
  const [movies, setMovies] = useState([])
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMovies() //now called again when component is reevaled
  }, [fetchMovies]) //never runs again unless page is reloaded, but good practice is to put all depens
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  //];
  const fetchMovies = useCallback(async() => {
    isLoading(true)
    setError(null)
    try {
      const res = await fetch('https://swapi.dev/api/films/')
    
      if(!res.ok) {
        throw new Error('Something went wrong')
      }
      const data = await res.json()


    
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(data.results)
      
    } catch (error) {
      setError(error.message)
    }
    isLoading(false)
    
    
  }, [])

  useEffect(() => {
    fetchMovies() //now called again when component is reevaled
  }, [fetchMovies]) //never runs again unless page is reloaded, but good practice is to put all depens

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!loading && <MoviesList movies={movies} />}
        
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
