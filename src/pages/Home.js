import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

export class Home extends Component {
  render() {
    return (
      <main>
        <Header />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(Home)