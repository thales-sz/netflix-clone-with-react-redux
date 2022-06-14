import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  state = {
    username: '',
    imgSrc: "https://i.pinimg.com/originals/1a/04/94/1a0494f328556a2f18f27c01a7a2d13b.jpg",
  }

  buttonClick = () => {
    const { dispatch, history } = this.props;
    const { username, imgSrc } = this.state;
    dispatch(userAction(username.toUpperCase(), imgSrc));
    history.push("/home");
  }

  imgBtnClick = () => {
    const imgOptions = document.querySelector(".img-options");
    if (imgOptions.style.display === '' || imgOptions.style.display === "none") {
      imgOptions.style.display = "flex";
    } else {
      imgOptions.style.display = "none";
    }
  }

  changeProfileImage = ({ target }) => {
    const imgOptions = document.querySelector(".img-options");
    const { imgSrc } = this.state;
    const aux = target.src;
    target.src = imgSrc;
    this.setState({ imgSrc: aux })
    if (imgOptions.style.display === '' || imgOptions.style.display === "none") {
      imgOptions.style.display = "flex";
    } else {
      imgOptions.style.display = "none";
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { username, imgSrc } = this.state;
    return (
      <main>
        <div className="user-name">Quem está assistindo?</div>
        <div className="input-container">
          <label htmlFor="input-login" className="label-btn">
            <input
              className="input-name"
              id="input-login"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Insira seu nome..."
            />
          </label>
        </div>
        <section className="user-img-container">
          <div className="aux-container">
          <img
            src={ imgSrc }
            alt="Foto de perfil do usuario"
            className="user-img"
            width="250px">
          </img>
          <button type='button' className="btn-img"
            onClick={this.imgBtnClick}>
            Mudar imagem {' '}
            <FontAwesomeIcon icon={faGear} />
          </button>
          <div className="img-options">
            <img className="option" src="https://i.pinimg.com/564x/1d/ce/9a/1dce9a824338b9cad4b671ab020cf8cd.jpg" alt="profile" role="button" width="200px" onClick={ this.changeProfileImage }></img>
            <img className="option" src="https://i.pinimg.com/564x/03/67/85/036785fa8f54085666226a67063bcfa9.jpg" alt="profile" role="button" width="200px" onClick={ this.changeProfileImage }></img>
            <img className="option" src="https://i.pinimg.com/564x/f2/03/30/f20330ccb1f765c46b3f2fbf0037206e.jpg" alt="profile" role="button" width="200px" onClick={ this.changeProfileImage }></img>
            <img className="option" src="https://i.pinimg.com/564x/15/8e/34/158e3449e53016326cc3ed5ef6860b25.jpg" alt="profile" role="button" width="200px" onClick={ this.changeProfileImage }></img>
            <img className="option" src="https://i.pinimg.com/564x/01/d9/82/01d982939e4c55709b18713534a0a25c.jpg" alt="profile" role="button" width="200px" onClick={ this.changeProfileImage }></img>
          </div>
          </div>
        </section>
        <button type='button' onClick={this.buttonClick} className="btn">Bora assistir!</button>
      </main>
    );
  }
}

const mapStateToProps = (store) => ({
  globalState: store.reducer,
})

export default connect(mapStateToProps)(Login);