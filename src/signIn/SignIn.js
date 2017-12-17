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
  componentWillReceiveProps({ signInState, router }) {
    const token = signInState.get('token');

    if (signInState.get('token')) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('groups', signInState.get('groups').join(' '));

      router.push('/');
    }
  }

  onSignIn = (e) => {
    const { signIn } = this.props;
    signIn({
      email: this.emailField.input.value,
      password: this.passwordField.input.value
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
},
{ signIn, push })
(SignIn);

