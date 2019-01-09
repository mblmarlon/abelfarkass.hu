import * as React from 'react';


const navData = require('../../data/pages/nav.json');
const navbar = navData.navbar;

export interface NavbarProps {
}

export class Navbar extends React.Component<NavbarProps> {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-fixed w-100">
        <a className="navbar-brand" href="/">
          <h3 className="m-0">Abel Farkass</h3>
          <h4 className="m-0 text-secondary">Photography</h4>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navbar.nav.map((nav: any) => {
              return (
                <a className="nav-item nav-link" href={nav.href}>{nav.title}</a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
