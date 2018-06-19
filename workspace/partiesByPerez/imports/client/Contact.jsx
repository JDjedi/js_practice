import React, { Component } from 'react';
// import ContactParty from '../api/ContactParty';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) { 
    event.preventDefault();
    const { name, email, message } = this.state

    Meteor.call(
      'sendEmail',
      'JD <jcdiaz1201@gmail.com>',
      email,
      name,
      message
    )
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="column">
        <h3>Get in Touch</h3>
        <form onSubmit={this.submitHandler}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name" value={name} onChange={this.changeHandler}></input>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" placeholder="Email" value={email} onChange={this.changeHandler}></input>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Message" value={message} onChange={this.changeHandler}></textarea>
          </div>
          <ul className="actions">
            <input className="button" type="submit"></input>
          </ul>
        </form>
      </div>
    );
  }
}





