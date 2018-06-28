import React from "react";
import { Component } from "react";

import Contact from './Contact';

export default class Gallery extends React.Component {

	render() {
		return (
			<div className="page-wrap">
				<section id="main">
					<section id="pricing">
						<header>
							<h1>Plans</h1>
						</header>
						<div className="content">
							<div className="pricing column">
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
								<div className="button big">
									<p>99.99</p>
								</div>
							</div>
							<div className="pricing column">
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
								<div className="button big">
									<p>199.99</p>
								</div>
							</div>
							<div className="pricing column">
								<p>
									Mus sed interdum nunc dictum rutrum scelerisque erat a
									parturient condimentum potenti dapibus vestibulum condimentum
									per tristique porta. Torquent a ut consectetur a vel ullamcorper
									a commodo a mattis ipsum class quam sed eros vestibulum quisque
									a eu nulla scelerisque a elementum vestibulum.
								</p>
								<div className="button big">
									<p>299.99</p>
								</div>
							</div>
						</div>
					</section>

					<section id="contact-pricing">
						<Contact />
					</section>

					<footer id="footer">
						<div className="copyright">
							&copy; Untitled Design:{" "}
							<a href="https://templated.co/">TEMPLATED</a>. Images:{" "}
							<a href="https://unsplash.com/">Unsplash</a>.
						</div>
					</footer>
				</section>
			</div>
		);
	}
}