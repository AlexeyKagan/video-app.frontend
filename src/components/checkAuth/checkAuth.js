import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import checkAccess from './accessUtils';
import UserHasNotAccess from '../userHasNotAccess/userHasNotAccess';

class CheckAuth extends Component {
  render() {
    const { groups, requiredGroups } = this.props;
    const hasAccess = checkAccess(requiredGroups, groups.toJS());

    if (hasAccess) {
      return this.props.children;
    } else {
      return <UserHasNotAccess />;
    }
  }
}

CheckAuth.propTypes = {
  requiredGroups: PropTypes.array,
  groups: ImmutablePropTypes.list
};

export default connect((store) => {
  return {
    groups: store.signIn.get('groups')
  };
})(CheckAuth);
