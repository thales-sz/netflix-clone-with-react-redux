import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';
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
    const { globalState: { user } } = this.props;
    const { username } = this.state;
    return (
      <main>
        <section className="user-name">{user}FLIX</section>
        <label htmlFor="input-login">
          <input
            id="input-login"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Insira seu nome:"
          />
          <button type='button' onClick={this.buttonClick}>Login</button>
        </label>
        <div>Qualquer semelhança com um site de filmes é mera coincidência xD</div>
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  globalState: store.reducer,
})

export default connect(mapStateToProps)(Login);