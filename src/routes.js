import React from 'react';
import App from './app/App';

import NotFound from './components/notFound/notFound';
// import Content from './content/Content';
import Movie from './movie/Movie';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Administration from './administration/Administration';
import CheckAuth from './components/checkAuth/checkAuth';
import FormMovie from './administration/components/formMovie/formMovie';
import FormUser from './administration/components/formUser/formUser';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// export default (
//   <Route>
//     <Route path="/" component={App}>
//       <IndexRoute component={Content} />
//       <Route path="movies/:id" component={Movie} />
//       <Route path="signin" component={SignIn} />
//       <Route path="signup" component={SignUp} />
//       <Route component={CheckAuth} requiredGroups={['ADMIN', 'MODERATOR']}>
//         <Route path="administration/:group" component={Administration} />
//         <Route path="administration/:group">
//           <Route path="movies/new" component={FormMovie} />
//           <Route path="movies/:id/edit" component={FormMovie} />
//           <Route path="users/:id/edit" component={FormUser} />
//         </Route>
//       </Route>
//     </Route>
//     <Route path="*" component={NotFound} />
//   </Route>
// );
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <MuiThemeProvider>
    <App />
    {/*<Route path="/" component={App} />*/}
    {/*<Route path="*" component={NotFound} />*/}
  </MuiThemeProvider>
);
