import React from "react";
import { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import Contact from './Contact';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			imageToEnlarge: []
		};
	}

	render() {
		const { isOpen, imageToEnlarge } = this.state;

		return (
			<div className="page-wrap">
				<section id="main">
					<section id="galleries">
						<div className="gallery">
							<header>
								<h1>Gallery</h1>
							</header>
							<div className="content">
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/01.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/01.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/05.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/05.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/09.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/09.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/02.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/02.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/06.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/06.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/10.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/10.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/03.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/03.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/07.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/07.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/11.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/11.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/04.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/04.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/08.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/08.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
								<div className="media">
									<div
										id="imageToEnlarge"
										onClick={() =>
											this.setState({
												isOpen: true,
												imageToEnlarge: ["images/fulls/12.jpg"]
											})
										}
									>
										<img
											src="images/thumbs/12.jpg"
											alt=""
											title="This right here is a caption."
										/>
									</div>
								</div>
							</div>
							{isOpen && (
								<Lightbox
									mainSrc={imageToEnlarge[0]}
									onCloseRequest={() =>
										this.setState({ isOpen: false, imageToEnlarge: [] })
									}
								/>
							)}
						</div>
					</section>

					<section id="contact">
						<div className="social column">
							<h3>About Me</h3>
							<p>
								Mus sed interdum nunc dictum rutrum scelerisque erat a
								parturient condimentum potenti dapibus vestibulum condimentum
								per tristique porta. Torquent a ut consectetur a vel ullamcorper
								a commodo a mattis ipsum class quam sed eros vestibulum quisque
								a eu nulla scelerisque a elementum vestibulum.
							</p>
							<p>
								Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra
								dis condimentum ullamcorper rutrum vehicula id nisi vel aptent
								orci litora hendrerit penatibus erat ad sit. In a semper velit
								eleifend a viverra adipiscing a phasellus urna praesent
								parturient integer ultrices montes parturient suscipit posuere
								quis aenean. Parturient euismod ultricies commodo arcu elementum
								suspendisse id dictumst at ut vestibulum conubia quisque a
								himenaeos dictum proin dis purus integer mollis parturient eros
								scelerisque dis libero parturient magnis.
							</p>
							<h3>Follow Me</h3>
							<ul className="icons">
								<li>
									<a href="#" className="icon fa-twitter">
										<span className="label">Twitter</span>
									</a>
								</li>
								<li>
									<a href="#" className="icon fa-facebook">
										<span className="label">Facebook</span>
									</a>
								</li>
								<li>
									<a href="#" className="icon fa-instagram">
										<span className="label">Instagram</span>
									</a>
								</li>
							</ul>
						</div>

						<div className="column">
							<Contact />
						</div>
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
