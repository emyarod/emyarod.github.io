import React from 'react';
import Jumbotron from './Jumbotron';

export default function Contact({ pathname }) {
  return (
    <div className="contact">
      <Jumbotron pathname={pathname} img={ContactImg}>
        <h1>Let's talk.</h1>
        <p className="sb blurb">
          I'm always interested in new opportunities. If you have a project you'd like to discuss, or even if you just want to find out more about me, get in touch with me so we can get started.
        </p>
      </Jumbotron>
      <div className="block contact-form">
        <div className="wrap">
          <form
            id="contact-form"
            action="https://formspree.io/mail@andrewf.wang"
            method="POST"
          >
            <div className="form-control">
              <label className="label" htmlFor="inputName">Name</label>
              <input id="inputName" type="text" name="name" required />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="inputEmail">
                Email address
              </label>
              <input id="inputEmail" type="email" name="_replyto" required />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="inputMessage">Message</label>
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
