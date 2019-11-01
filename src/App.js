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
        <ListArticles />
        <Login />
        <Signup />
        <CreateArticle />
      </>
    )
  }
}

export default App;