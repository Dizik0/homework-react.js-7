import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/authorization/authorization-opetations";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  submitForm = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);
  };

  getValueInput = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              title="Enter your email"
              onChange={this.getValueInput}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.getValueInput}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Пароль должен состоять из цифр и букв"
              required
            />
          </label>
          <button type="submit">Sing in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
