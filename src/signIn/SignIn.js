import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import './SignIn.scss';
import { signIn } from './SignIn.Actions';

class SignIn extends Component {
  componentWillReceiveProps({ signInState }) {
    if (signInState.get('token') && signInState.get('token')) {
      localStorage.setItem('id_token', signInState.get('token'));
      localStorage.setItem('groups', signInState.get('groups').join(' '));
      this.props.router.push('/');
    }
  }

  onSignIn = (e) => {
    const { boundSignIn } = this.props;
    boundSignIn({
      email: this.emailField.input.value,
      password: this.passwordField.input.value
    });
  }

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
  boundSignIn: PropTypes.func,
  signInState: PropTypes.object
};

export default connect((store) => {
  return {
    signInState: store.signIn
  };
}, (dispatch) => {
  return {
    boundSignIn: bindActionCreators(signIn, dispatch)
  };
})(SignIn);

