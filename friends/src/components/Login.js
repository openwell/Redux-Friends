import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../store/actions/index";
export class Login extends Component {
  submitHandler = e => {
    e.preventDefault();
    const data = {
      username: e.currentTarget[0].value,
      password: e.currentTarget[1].value
    };

    this.props.fetch(data, this.props.history);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <label htmlFor="">Username</label>
          <input type="text" /> <br />
          <label htmlFor="">Password</label>
          <input type="password" /> <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
export default connect(
  mapStateToProps,
  { fetch }
)(Login);
