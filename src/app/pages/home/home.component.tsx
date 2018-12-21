import * as React from 'react';

const homeData = require('../../data/pages/home.json');

export interface HomeProps {
}

export class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <div>
        <h1>{homeData.title}</h1>
      </div>
    );
  }
}

export default Home