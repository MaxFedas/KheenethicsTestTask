import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Broadcast application</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {this.props.currentUser ?
                <li><a href="#" data-toggle="modal" data-target="#modal-reg" name="editProfile"><span className="glyphicon glyphicon-user"></span>Edit Profile</a></li>
                : ''
              }
              <li><a href="#" data-toggle="modal" data-target="#modal-login"><AccountsUIWrapper /></a></li>
              <li><a href="#" data-toggle="modal" data-target="#modal-reg" name="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#" data-toggle="modal" data-target="#modal-login"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
            </ul>
          </div>
        </div>
      </div>);
  }
}
