import React, { Component } from 'react'
import ListArticles from './Components/ListArticles'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './index.css';
import CreateArticle from './Components/CreateArticle'

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <Signup />
        <CreateArticle />
        <ListArticles />
      </>
    )
  }
}

export default App;