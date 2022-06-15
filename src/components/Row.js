import React, { Component } from 'react'
import { getMovies } from '../helpers/api'
import './Row.css';

class Row extends Component {
  state = {
    movies: [],
  }

  componentDidMount = async () => {
    const { path, title } = this.props;
    try {
      const data = await getMovies(path);
      this.setState({ movies: data.results });
    } catch (error) {
      console.log(`${title} error`, error);
    }
  }

  render() {
    const { title, isLarge } = this.props;
    const { movies } = this.state;
    return (
      <>
        <div className="container">
          <h2>{title}</h2>
          <div className="row-cards">
            {movies.map((movie) => {
              return (
                <img
                  className={`movie-card${isLarge ? "-large" : ''}`}
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original${isLarge ? movie.backdrop_path : movie.poster_path}`}
                  alt={movie.name}
                >
                </img>);
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Row;
