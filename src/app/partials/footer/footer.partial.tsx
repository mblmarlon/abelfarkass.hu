import * as React from 'react';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps, any> {
  public render() {
    return (
      <footer className="text-uppercase">
        Footer
      </footer>
    );
  }
}

export default Footer