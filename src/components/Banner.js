import React, { Component } from 'react'
import { connect } from 'react-redux'
import categories, { getMovies } from '../helpers/api'
import './Banner.css'

export class Banner extends Component {
  state = {
    movie: '',
  }
  componentDidMount = async () => {
    try {
      const categoryBanner = categories.find(category => category.name === 'netflixOriginals');
      const data = await getMovies(categoryBanner.path);
      const index = Math.floor(Math.random() * data.results.length);
      this.setState({ movie: data.results[index] })
    } catch (error) {
      console.log(`Banner error`, error);
    }
  }
  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <header
        className="banner-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}>
        <section className="banner-content">
          <h1 className="banner-title">{movie.title || movie.name}</h1>
          <section className="banner-button-content">
            <div className="banner-button">Assistir</div>
            <div className="banner-button">Minha Lista</div>
          </section>
          <div className="banner-description">
            {movie.overview}
          </div>
        </section>
        <div className="fade"></div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(Banner)