import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/layouts/navBar";
import UserItem from './components/layouts/UserItem';
import Users from "./components/Users"
import Search from "./component/Search"
import Alert from "./components/layouts/Alert";
import About from "./component/pages/About"
import axios from "axios";
import User from "./components/User"
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null ,
    user:{} ,
    repos:[] ,
  }


  searchUsers = async (text) => {
    console.log(text)


    this.setState({ loading: true })
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data)
    this.setState({
      users: res.data.items,
      loading: false
    })

  }
  getUser = async(username)=>{
    
    this.setState({ loading: true })
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data)
    this.setState({
      user: res.data,
      loading: false
    })

  }
  
  // get user repos

  getUserRepos = async(username)=>{
    
    this.setState({ loading: true })
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data)
    this.setState({
      repos: res.data,
      loading: false
    })

  }
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (message, type) => {
    this.setState({ alert: { msg: message, type: type } })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000)
  }
  foo = () => "Bars"
  render() {
    console.log(this.state)

    // CLEAR USERS FROM STATE 


    return (
      <Router>

        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                < Search showClear={this.state.users.length > 0 ? true : false} clearUsers={this.clearUsers} searchUsers={this.searchUsers} setAlert={this.setAlert} />
                <Users loading={this.state.loading} users={this.state.users} />
              </Fragment>

            )} />
          </Switch>
          <Route exact path="/about"  component={About}/>
            <Route exact path="/user/:login" render={props=>(
              <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} user={this.state.user} loading={this.state.loading} repos={this.state.repos}/>
            )}/>
        </div>
      </Router>

    )
  }

}

export default App;
