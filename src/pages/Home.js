import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import './Home.css';

export class Home extends Component {
  render() {
    const { userData } = this.props;
    return (
      <main>
        <Header />
        <div className="username">{userData}FLIX</div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.reducer.user,
})



export default connect(mapStateToProps)(Home)