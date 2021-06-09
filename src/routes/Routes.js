import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import history from './helpers/browser-history';
import Home from '../pages/Home';

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
