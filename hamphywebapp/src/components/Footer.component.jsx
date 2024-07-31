import React, { Component } from "react";
import "../css/footer.css";
export class Footercomponent extends Component {
	render() {
		return (
			<div>
				<footer className="bg-gray-900 dark:bg-gray-900">
					<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
						<div className="md:flex md:justify-between">
							<div className="mb-6 md:mb-0">
								<a
									href="https://Hamphy.com/"
									className="flex items-center">
									<img
										src="/hamphycomlogo.png"
										className="h-8 me-3"
										alt="Hamphy Logo"
									/>
									<span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
										Hamphy
									</span>
								</a>
							</div>
							<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
								<div>
									<h2 className="mb-6 text-sm font-semibold  text-white  uppercase dark:text-white">
										Tools
									</h2>
									<ul className="text-gray-500 dark:text-gray-400 font-medium">
										<li className="mb-4">
											<a href="/" className="hover:underline">
												Monetization Checker
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/channel-banner-downloader"
												className="hover:underline">
												Youtube Banner Downloader
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/thumbnail-downloader"
												className="hover:underline">
												Youtube Thumbnail Downloader
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/dislike-viewer"
												className="hover:underline">
												Youtube Dislike Downloader
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/shorts-thumbnail-downloader"
												className="hover:underline">
												Youtube Shorts Thumbnail Downloader
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/embed-code-generator"
												className="hover:underline">
												Embed Code Generator
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h2 className="mb-6 text-sm font-semibold  text-white  uppercase dark:text-white">
										Follow us
									</h2>
									<ul className="text-gray-500 dark:text-gray-400 font-medium">
										<li className="mb-4">
											<a href="" className="hover:underline ">
												Facebook
											</a>
										</li>
										<li>
											<a href="" className="hover:underline">
												Instagram
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h2 className="mb-6 text-sm font-semibold  text-white  uppercase dark:text-white">
										Legal
									</h2>
									<ul className="text-gray-500 dark:text-gray-400 font-medium">
										<li className="mb-4">
											<a
												href="/privacy-policy"
												className="hover:underline">
												Privacy Policy
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/disclaimer"
												className="hover:underline">
												Disclaimer
											</a>
										</li>
										<li className="mb-4">
											<a
												href="/contact-us"
												className="hover:underline">
												Contact us
											</a>
										</li>
										<li className="mb-4">
											<a href="/about" className="hover:underline">
												About
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
						<div className="sm:flex sm:items-center sm:justify-between">
							<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
								© 2023{" "}
								<a
									href="https://Hamphy.com/"
									className="footer-copyrightbrand hover:underline">
									Hamphy™
								</a>
								. All Rights Reserved.
							</span>
							<div className="flex mt-4 sm:justify-center sm:mt-0">
								<a
									href="#"
									className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
									<svg
										className="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 8 19">
										<path
											fill-rule="evenodd"
											d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
											clip-rule="evenodd"
										/>
									</svg>
									<span className="sr-only">Facebook page</span>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footercomponent;
