import * as React from 'react';
import "./navbar.partial.scss";

const navData = require('../../data/pages/nav.json');
const navbar = navData.navbar;

export interface NavbarProps {
}

export interface NavbarState {
  pageTitle?: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    const title = window.location.pathname.split( '/' ).pop()
    this.state = {
      pageTitle: title,
    }
  }

  
  public render() {  
    const { pageTitle } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-fixed w-100" >
        <a className="navbar-brand" href="/">
          <h3 className="m-0">Abel Farkass</h3>
          <h4 className="m-0 text-secondary">Photography</h4>
        </a>
        {pageTitle && pageTitle !== null && (
          <div className="navbar-page-title">
            <h2 className="text-capitalize">{pageTitle}</h2>
          </div>
        )}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navbar.nav.map((nav: any, index: number) => {
              return (
                <a className="nav-item nav-link" href={nav.href} key={`${nav.title}-${index}`}>{nav.title}</a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
