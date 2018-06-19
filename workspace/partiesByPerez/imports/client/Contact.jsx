import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onChange = e => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div class="column">
        <h3>Get in Touch</h3>
        <form action="#" method="post">
          <div class="field half first">
            <label for="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div class="field half">
            <label for="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Message"
              value={message}
              onChange={this.onChange}
            />
          </div>
          <ul class="actions">
            <li>
              <input value="Send Message" class="button" type="submit" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
