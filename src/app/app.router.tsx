import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/home/home.component';
import Navbar from './partials/navbar/navbar.partial';
import Fashion from './pages/fashion/fashion.component';
import Still from './pages/still/still.component';
import Footer from './partials/footer/footer.partial';

export interface AppRouterProps {
}

export class AppRouter extends React.Component<AppRouterProps> {
  public render() {
    return (
      <div>
        <Navbar/>
        <main>
          <Router history={createBrowserHistory()}>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/fashion'} component={Fashion}/>
              <Route exact path={'/still'} component={Still}/>
            </Switch>
          </Router>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default AppRouter;