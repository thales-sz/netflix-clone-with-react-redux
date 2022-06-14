import React, { Component } from 'react'
import { connect } from 'react-redux'
import categories from '../helpers/api';
import Row from '../components/Row'
import Header from '../components/Header'
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        {categories.map((category) => {
          return <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
            />
        })}
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.reducer.user,
})



export default connect(mapStateToProps)(Home)