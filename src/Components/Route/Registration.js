import { Component } from "react";

export class Registration extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };

  getValueInput = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitForm(e) {
    e.preventDefault();
  }

  componentDidUpdate() {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Name
            <input type="name" name="name" onChange={this.getValueInput} />
          </label>
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
        </form>
        <button type="submit">register</button>
      </div>
    );
  }
}
