import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './Header';
import Content from '../content/Content';

import Movie from '../movie/Movie';
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import Administration from '../administration/Administration';
import CheckAuth from '../components/checkAuth/checkAuth';
import FormMovie from '../administration/components/formMovie/formMovie';
import FormUser from '../administration/components/formUser/formUser';


class App extends Component {
  getChildContext() {
    return {router: this.props.router};
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="app-pages">
            <Content />

            <Switch>
              <Route path="/movies/:id" component={Movie} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />

              <CheckAuth requiredGroups={['ADMIN', 'MODERATOR']}>
                <Route path="administration/:group" component={Administration} />
                {/*<Route path="administration/:group">*/}
                  {/*<Route path="movies/new" component={FormMovie} />*/}
                  {/*<Route path="movies/:id/edit" component={FormMovie} />*/}
                  {/*<Route path="users/:id/edit" component={FormUser} />*/}
                {/*</Route>*/}
              </CheckAuth>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired
};

App.childContextTypes = {
  router: PropTypes.object
};

export default App;
