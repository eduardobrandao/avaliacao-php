import React, { Component } from "react";
import api from "../api";

export default class Main extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get("/users");

    this.setState({ users: response.users });
  };

  render() {
    return <h2> {this.state.users}</h2>;
  }
}
