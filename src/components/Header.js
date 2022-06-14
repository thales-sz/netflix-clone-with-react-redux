import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Header.css';

class Header extends Component {
  render() {
    console.log(this.props);
    const { userData } = this.props;
    return (
      <main>
        <nav>
          <Link to="/">LOGIN - </Link>
          <Link to="/home">HOME - </Link>
          <Link to="/profile">PROFILE</Link>
        </nav>
        <header className="header-banner">
          <div className="username">{userData.user}FLIX</div>
          <section className="user-info">
            <img src={userData.userImg} alt="imagem de perfil" width="50px"></img>
            Menu
          </section>
        </header>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.reducer,
})

export default connect(mapStateToProps)(Header)