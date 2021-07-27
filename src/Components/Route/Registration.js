import { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/authorization/authorization-opetations";

class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  submitForm = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);
  };

  getValueInput = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Name
            <input
              type="name"
              name="name"
              onChange={this.getValueInput}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.getValueInput}
              title="Enter your email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.getValueInput}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Пароль должен состоять из цифр и букв"
              required
            />
          </label>
          <button type="submit">register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(Registration);
