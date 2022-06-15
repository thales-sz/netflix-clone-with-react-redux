import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css';

class Header extends Component {
  state = {
    blackHeader: false,
  }
  render() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.setState({ blackHeader: true })
      } else {
        this.setState({ blackHeader: false })
      }
    })
    const { userData } = this.props;
    const { blackHeader } = this.state;
    return (
      <main>
        <header className={`header-banner${blackHeader ? '-black' : ''}`}>
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