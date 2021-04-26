'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

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

  getGitHubApiUrl(username, type) {
    const urlBase = 'http://api.github.com/users'
    const internalUsername = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';

    console.log(`${urlBase}${internalUsername}${internalType}`);

    return `${urlBase}${internalUsername}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value
    const KeyCode = e.which || e.KeyCode
    const ENTER = 13

    if (KeyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value)).then((result) => {
        this.setState({
          userInfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos(type) {

    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userInfo.login, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
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
