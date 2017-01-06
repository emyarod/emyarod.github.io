import React from 'react';
import Jumbotron from './Jumbotron';
import Label from './Label';
import ContactImg from '../static/img/Contact/contact.jpg';
import BlockRevealer from './BlockRevealer';
import handleEnterViewport from '../config/utils';

export default function Contact({ pathname }) {
  return (
    <div className="contact">
      <Jumbotron pathname={pathname} img={ContactImg}>
        <BlockRevealer enterViewport={handleEnterViewport}>
          <h1>Let's talk.</h1>
        </BlockRevealer>
        <BlockRevealer
          enterViewport={handleEnterViewport}
          animationDelay={.25}
        >
          <p className="sb blurb">
            If you have a project you'd like to discuss, or even if you just want to find out more about me, get in touch so we can get started.
          </p>
        </BlockRevealer>
      </Jumbotron>
      <div className="block contact-form">
        <div className="wrap">
          <form
            id="contact-form"
            action="https://formspree.io/mail@andrewf.wang"
            method="POST"
          >
            <div className="form-control">
              <Label className="label" htmlFor="inputName">Name</Label>
              <input id="inputName" type="text" name="name" required />
            </div>
            <div className="form-control">
              <Label className="label" htmlFor="inputEmail">
                Email address
              </Label>
              <input id="inputEmail" type="email" name="_replyto" required />
            </div>
            <div className="form-control">
              <Label className="label" htmlFor="inputMessage">Message</Label>
              <textarea id="inputMessage" name="messsage" rows="5" required />
            </div>
            <input type="text" name="_gotcha" style={{'display': 'none'}} />
            <input type="hidden" name="_next" value="/contact" />
            <input className="btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.PropTypes = {
  pathname: React.PropTypes.string.isRequired,
};
