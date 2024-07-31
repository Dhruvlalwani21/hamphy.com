import React, { Component } from "react";

export class NavBarcomponent extends Component {
	render() {
		return (
			<>
				<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
					<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
						<a
							href="#"
							className="flex items-center space-x-3 rtl:space-x-reverse">
							<img
								src="/hamphycomlogo.png"
								className="h-8"
								alt="Hamphy Logo"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								Hamphy
							</span>
						</a>
					</div>
				</nav>
			</>
		);
	}
}

export default NavBarcomponent;
