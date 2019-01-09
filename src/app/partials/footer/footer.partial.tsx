import * as React from 'react';
import './footer.partial.scss';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps, any> {
  public render() {
    return (
      <footer className="footer-partial text-uppercase">
        Footer
      </footer>
    );
  }
}

export default Footer