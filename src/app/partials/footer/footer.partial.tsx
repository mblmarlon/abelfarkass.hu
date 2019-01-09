import * as React from 'react';
import './footer.partial.scss';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps, any> {
  public render() {
    return (
      <footer className="footer-partial text-uppercase">
        <a href="https://www.instagram.com/art_of_abel/" target="_blank" title="art_of_abel">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="/contact" target="_blank">
          ALL RIGHTS RESERVED
        </a>
      </footer>
    );
  }
}

export default Footer