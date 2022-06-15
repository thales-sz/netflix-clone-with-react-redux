import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css';

class Header extends Component {
  render() {
    const { userData } = this.props;
    
    return (
      <main>
        <header className="header-banner">
          <div className="username">{userData.user}FLIX</div>
          <section className="user-info">
            <img src={userData.userImg} alt="imagem de perfil" width="50px"></img>
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