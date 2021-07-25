import { Component } from "react";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  submitForm(e) {
    e.preventDefault();
  }

  getValueInput = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  componentDidUpdate() {
    console.log(this.state.email);
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Email
            <input type="email" name="email" onChange={this.getValueInput} />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.getValueInput}
            />
          </label>
          <button type="submit">Sing in</button>
        </form>
      </div>
    );
  }
}
