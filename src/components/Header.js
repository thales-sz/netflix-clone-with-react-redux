import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <main>
        <nav>
          <Link to="/">LOGIN - </Link>
          <Link to="/home">HOME - </Link>
          <Link to="/profile">PROFILE</Link>
        </nav>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Header)