

import React from "react";

export default class Gallery extends React.Component {

	render() {
		return(
			<div>
				<main>
					<div className="page-wrap">
							<section id="main">
									<section id="banner">
										<div className="inner">
											<h1>Parties by Perez</h1>
											<p>The Only Party Planner You Will Ever Need</p>
										</div>
									</section>

									<section id="galleries">
											<div className="gallery">
												<header className="special">
													<h2>Past Events</h2>
												</header>
												<div className="content">
													<div className="media">
														<img src="images/thumbs/01.jpg" alt="" title="This right here is a caption." />
													</div>
													<div className="media">
														<img src="images/thumbs/05.jpg" alt="" title="This right here is a caption." />
													</div>
													<div className="media">
														<img src="images/thumbs/09.jpg" alt="" title="This right here is a caption." />
													</div>
													<div className="media">
														<img src="images/thumbs/02.jpg" alt="" title="This right here is a caption." />
													</div>

												</div>
												<footer>
													<a href="/gallery" className="button big">Full Gallery</a>
												</footer>
											</div>
									</section>
									<section id="contact">
											<div className="social column">
												<h3>About Me</h3>
												<p>Mus sed interdum nunc dictum rutrum scelerisque erat a parturient condimentum potenti dapibus vestibulum condimentum per tristique porta. Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum className quam sed eros vestibulum quisque a eu nulla scelerisque a elementum vestibulum.</p>
												<p>Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra adipiscing a phasellus urna praesent parturient integer ultrices montes parturient suscipit posuere quis aenean. Parturient euismod ultricies commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque a himenaeos dictum proin dis purus integer mollis parturient eros scelerisque dis libero parturient magnis.</p>
												<h3>Follow Me</h3>
												<ul className="icons">
													<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
													<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
													<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
												</ul>
											</div>

											<div className="column">
												<h3>Get in Touch</h3>
												<form action="#" method="post">
													<div className="field half first">
														<label for="name">Name</label>
														<input name="name" id="name" type="text" placeholder="Name">
														</input>
													</div>
													<div className="field half">
														<label for="email">Email</label>
														<input name="email" id="email" type="email" placeholder="Email">
														</input>
													</div>
													<div className="field">
														<label for="message">Message</label>
														<textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
													</div>
													<ul className="actions">
														<li><input value="Send Message" className="button" type="submit"></input></li>
													</ul>
												</form>
											</div>
									</section>

									<footer id="footer">
										<div className="copyright">
											&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
										</div>
									</footer>
							</section>
					</div>
				</main>
			</div>
		);
	}
}




