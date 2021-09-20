import React, { Component } from "react";
import axios from "axios"
import "../css/Register_Login_Form.css";


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.Login = this.Login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      username: "",
      password: "",
      data: {}
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  resetInput() {
    this.setState({
      username: "",
      password: "",
    })
  }
  async Login(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post("https://amadas.herokuapp.com/accounts/login/", user).then(result => {
      axios.get("https://amadas.herokuapp.com/librarys/" + result.data[0]._id).then(async library => {
        if (result.data[0].typeAccount === "customer") {
          sessionStorage.setItem("username", result.data[0].username)
          sessionStorage.setItem("id", result.data[0]._id)
          await sessionStorage.setItem("library", JSON.stringify(library.data[0].games))
          alert("Login successfully.")
          window.location = '/'
        }
        else if (result.data[0].typeAccount === "admin") {
          sessionStorage.setItem("username", result.data[0].username)
          sessionStorage.setItem("id", result.data[0]._id)
          sessionStorage.setItem("admin_right", "admin")
          await sessionStorage.setItem("library", JSON.stringify(library.data[0].games))
          alert("Admin login successfully.")
          window.location = '/admin'
        }
      })
    })
      .catch(err => alert("Login failed.\n" + err))



  }


  render() {
    return (
      <form id="LoginForm" onSubmit={this.Login}>
        <label >Username</label>
        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  }
}
