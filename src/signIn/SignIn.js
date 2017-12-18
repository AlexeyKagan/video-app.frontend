import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import { signIn } from './SignIn.Actions';
import { push } from 'react-router-redux';

// @TODO. Rethink this component
class SignIn extends Component {
  onSignIn = () => {
    const { signIn, push } = this.props;

    signIn({
      email: this.emailField.input.value, // @TODO
      password: this.passwordField.input.value // @TODO
    }).then(() => {
      push('/');
    });
  };

  render() {
    return (
      <div className="flex-container form-container">
        <div className="flex-container app-form">
          <TextField floatingLabelText="Email" fullWidth ref={(email) => { this.emailField = email; }}/>
          <TextField
            floatingLabelText="Password"
            type="password"
            fullWidth
            ref={(password) => { this.passwordField = password; }}
          />
          <RaisedButton label="Sign In" onClick={this.onSignIn} fullWidth className="form-btn"/>
          <Link to="/signup" style={{ width: 'inherit' }}>
            <RaisedButton label="SIGN UP" fullWidth className="form-btn"/>
          </Link>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func,
  signInState: PropTypes.object
};

export default connect((store) => {
  return {
    signInState: store.signIn
  };
}, { signIn, push })(SignIn);

