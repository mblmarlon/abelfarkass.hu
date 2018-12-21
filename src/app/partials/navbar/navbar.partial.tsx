import * as React from 'react';


const navData = require('../../data/pages/nav.json');
const navbar = navData.navbar;

export interface NavbarProps {
}

export class Navbar extends React.Component<NavbarProps> {
  public render() {
    return (
      <nav className="partial-navbar">
        <div className="navbar-brand">
          LOGO
        </div>
        <div className="navbar-nav">
        <ul className="nav">
          {navbar.nav.map((nav: any) => {
            return (
              <li className="nav-item">
                <a className="nav-link disabled" href={nav.href}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar
