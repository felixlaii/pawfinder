import axios from "axios";
import { Link } from "react-router-dom";
import SignUpHero from "../../assets/images/signin-hero.jpeg";
import SignUpIcon from "../../assets/icons/kitty-signup.png";
import Input from "../../components/Input/Input";
import DropDown from "../../components/DropDown/DropDown";
import "../SignUp/signUp.scss";
import "../../components/Input/input.scss";

function SignUp(props) {
  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/users/register`, {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        username: e.target.username.value,
        password: e.target.password.value,
        animalType: e.target.animalType.value,
        breed: e.target.breed.value,
      })
      .then((res) => {
        props.history.push("/login");
      });
  };

  return (
    <div className="signup-popup">
      <div className="signup-popup__wrapper">
        <form onSubmit={handleSignUp} className="signup-popup__form">
          <div className="signup-pop__titlewrapper">
            <h1 className="signup-popup__header">Sign Up!</h1>
            <div className="signup-popup__iconwrapper">
              <img
                className="signup-popup__icon"
                src={SignUpIcon}
                alt="sign up icon"
              />
            </div>
          </div>
          <Input label="First Name" name="firstName" type="text" />
          <Input label="Last Name" name="lastName" type="text" />

          <Input label="Username" name="username" type="text" />
          <Input label="Password" name="password" type="password" />

          <label className="input-field__label">Type of Animal</label>
          <select className="input-field__input" name="animalType">
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
          </select>

          <DropDown name="breed" />

          <button className="signup-popup__button" type="submit">
            sign up
          </button>

          <Link to="/login">
            <button className="signup-popup__button" type="submit">
              log in
            </button>
          </Link>
        </form>
        <div className="signup-popup__logo">
          <div className="signup-popup__logowrapper">
            <img
              className="signup-popup__hero"
              src={SignUpHero}
              alt="login hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
