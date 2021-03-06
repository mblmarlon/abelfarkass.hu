import * as React from 'react';


export interface ContactProps {
}

export class Contact extends React.Component<ContactProps, any> {
  public render() {
    return (
      <div className="page page-portraits">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-8 offset-2 col-md-6 offset-md-3">
                <img className="w-100 mb-4" src={`${process.env.PUBLIC_URL}/img/contact/contact.jpg`} alt=""/>
              </div>
            </div>
            <ul className="list-unstyled">
              <li>E-MAIL: <a href="mailto:abelfarkass@icloud.com">abelfarkass@icloud.com</a></li>
              <li>TEL: <a href="tel:0036306169793">+36306169793</a></li>
            </ul> 
          </div>
        </div>
      </div>
    );
  }
}

export default Contact