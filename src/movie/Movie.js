import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { getMovie } from './Movie.Actions';
import Item from '../components/item/item';

// class Movie extends Component {
//   componentWillMount() {
//     const { boundGetMovie, routeParams: { id } } = this.props;
//     boundGetMovie(id);
//   }
//
//   render() {
//     const { movie } = this.props;
//
//     return (
//       <div>
//         <div className="flex-container flex-section">
//           {/*<Item watch={false} movie={movie.toJS()}/>*/}
//         </div>
//       </div>
//     );
//   }
// }
//
// Movie.propTypes = {
//   movie: ImmutablePropTypes.map,
//   boundGetMovie: PropTypes.func,
//   routeParams: PropTypes.object
// };
//
// export default connect((store) => {
//   return {
//     movie: store.movie.get('movie')
//   };
// }, (dispatch) => {
//   return {
//     boundGetMovie: bindActionCreators(getMovie, dispatch) // @todo
//   };
// })(Movie);

class Movie extends Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default Movie;
