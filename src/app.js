'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import api from './services/api'
import getGitHubApiUrl from './services/urls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    const value = e.target.value
    const KeyCode = e.which || e.KeyCode
    const ENTER = 13

    if (KeyCode === ENTER) {
      this.setState({ isFetching: true })
      api.get(getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.data.name,
              photo: result.data.avatar_url,
              login: result.data.login,
              repos: result.data.public_repos,
              followers: result.data.followers,
              following: result.data.following
            },
            repos: [],
            starred: []
          })
        })
        .then(() => this.setState({ isFetching: false }))
    }
  }

  getRepos(type) {

    return (e) => {
      api.get(getGitHubApiUrl(this.state.userInfo.login, type))
        .then((result) => {
          console.log(result)
          this.setState({
            [type]: result.data.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
