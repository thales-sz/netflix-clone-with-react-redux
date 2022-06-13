import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';
import Header from '../components/Header';
import './Login.css';

class Login extends React.Component {
  state = {
    username: '',
  }

  buttonClick = () => {
    const { dispatch, history } = this.props;
    const { username } = this.state;
    dispatch(userAction(username.toUpperCase()));
    history.push("/home");
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { username } = this.state;
    return (
      <main>
        <Header />
        <div className="user-name">Quem está assistindo?</div>
        <div className="user-img">
          <img
            src="https://i.pinimg.com/originals/1a/04/94/1a0494f328556a2f18f27c01a7a2d13b.jpg"
            alt="Foto de perfil do usuario"
            className="user-img"
            width="200px">
          </img>
          <button type='button'>Mudar Imagem</button>
        </div>
        <div className="input-container">
          Insira seu nome:
        <label htmlFor="input-login" className="label-btn"> 
          <input
            className="input-name"
            id="input-login"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <button type='button' onClick={this.buttonClick} className="btn">OK</button>
        </label>
        </div>
        <div>Qualquer semelhança com um site de filmes é mera coincidência xD</div>
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  globalState: store.reducer,
})

export default connect(mapStateToProps)(Login);