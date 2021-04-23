'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        username: 'Ezno Serafin',
        photo: 'https://avatars.githubusercontent.com/u/60652221?v=4',
        login: 'enzoserafin',
        repos: 12,
        followers: 10,
        following: 5
      },
      repos: [{
        name: 'repo',
        link: '#'
      }],
      starred: [{
        name: 'repo',
        link: '#'
      }]
    }
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
