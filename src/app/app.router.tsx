import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/home/home.component';
import Navbar from './partials/navbar/navbar.partial';
import Fashion from './pages/fashion/fashion.component';
import Portraits from './pages/portraits/portraits.component';
import Still from './pages/still/still.component';
import Contact from './pages/contact/contact.component';
import Footer from './partials/footer/footer.partial';

export interface AppRouterProps {
}

export class AppRouter extends React.Component<AppRouterProps> {
  public render() {
    return (
      <div className="route">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/fashion'} component={Fashion}/>
            <Route exact path={'/portraits'} component={Portraits}/>
            <Route exact path={'/still'} component={Still}/>
            <Route exact path={'/contact'} component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;