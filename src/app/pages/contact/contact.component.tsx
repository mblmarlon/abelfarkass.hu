import * as React from 'react';


export interface ContactProps {
}

export class Contact extends React.Component<ContactProps, any> {
  public render() {
    return (
      <div>
        <h2 className="mt-2">Contact</h2>
        <div className="mt-md-5">
            <ul className="list-unstyled">
                <li>E-MAIL: <a href="mailto:abelfarkass@icloud.com">abelfarkass@icloud.com</a></li>
                <li>TEL: <a href="tel:0036306169793">+36306169793</a></li>
            </ul> 
        </div>
      </div>
    );
  }
}

export default Contact