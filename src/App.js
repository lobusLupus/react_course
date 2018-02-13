import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null
    }
  }
  componentDidMount() {
    /**
     * {
    "login": "ezmobius",
    "id": 5,
    "avatar_url": "https://avatars0.githubusercontent.com/u/5?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ezmobius",
    "html_url": "https://github.com/ezmobius",
    "followers_url": "https://api.github.com/users/ezmobius/followers",
    "following_url": "https://api.github.com/users/ezmobius/following{/other_user}",
    "gists_url": "https://api.github.com/users/ezmobius/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ezmobius/subscriptions",
    "organizations_url": "https://api.github.com/users/ezmobius/orgs",
    "repos_url": "https://api.github.com/users/ezmobius/repos",
    "events_url": "https://api.github.com/users/ezmobius/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ezmobius/received_events",
    "type": "User",
    "site_admin": false
  },
     */
    console.log('componentDidMount')
    fetch('https://api.github.com/users', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => this.setState({ users: resp }))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <section className="App">
        <header className="App-header">
         <h1 className="App-title">github users</h1>
        </header>
        <div className="github-users">
          {console.log(this.state) }
          {this.state.users ? <div> 
            User list
            {this.state.users.map(user => (<ul key={user.id}>
              <li>{user.login}</li>
              <li><img src={user.avatar_url} alt='not found' /></li>
              </ul>)
            
            )}
            
          </div> : <span>Loading...</span>}
        </div>
      </section>
    );
  }
}

export default App;
