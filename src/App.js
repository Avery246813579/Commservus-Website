import React, { Component } from 'react';
import './App.css';

class LoginPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form className="Login-Form">
            <input name="email" type="text" placeholder="Email Address" />
            <input name="username" type="password" placeholder="Password" />
            <div className="cancel">
              <button type="submit"> Login </button>
              <button onClick={this.props.closePopup}>Cancel</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

class SignUpPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form className="Login-Form">
            <input name="email" type="text" placeholder="Email Address" />
            <input name="username" type="password" placeholder="Password" />
            <div className="cancel">
              <button type="submit"> Sign Up </button>
              <button onClick={this.props.closePopup}>Cancel</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: false,
      showSignUp: false
    };
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  toggleSignUp() {
    this.setState({
      showSignUp: !this.state.showSignUp
    });
  }

  render() {
    return (
      <div className="App">
      <div className="Login-Bar">
        <button className="Login-Buttons" onClick={this.toggleLogin.bind(this)}> Login </button>
        <button className="Login-Buttons" onClick={this.toggleSignUp.bind(this)}> Sign up </button>
      </div>
        <header className="App-header">
          <h1 className="App-title">Commservus</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam velit, dapibus id maximus ac, rhoncus vel elit.  </p>
        </header>
        {this.state.showLogin ?
          <LoginPopup
            text='Login'
            closePopup={this.toggleLogin.bind(this)}
          />
          : null
        }
        {this.state.showSignUp ?
          <SignUpPopup
            text='Sign Up'
            closePopup={this.toggleSignUp.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default App;
