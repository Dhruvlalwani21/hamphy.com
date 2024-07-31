import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Sidebar extends Component {
	render() {
		return (
			<div>
				<div className="sidebar bg-slate-50 h-svh">
					<ul className="menu-items">
						<NavLink to="/">
							<li className="sidebar-tabs flex justify-between rounded-xl p-3 shadow-sm  align-middle">
								<img
									src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
									className="w-4 h-4"
								/>
								<span className="text-lg font-medium ">
									Dashboard
								</span>
								<span className="text-lg font-medium ">{">"}</span>
							</li>{" "}
						</NavLink>

						<NavLink to="/pages">
							<li className="sidebar-tabs flex justify-between rounded-xl p-3 shadow-sm  align-middle">
								<img
									src="https://cdn-icons-png.flaticon.com/512/1250/1250680.png"
									className="w-4 h-4"
								/>
								<span className="text-lg font-medium">Pages</span>
								<span className="text-lg font-medium ">{">"}</span>
							</li>{" "}
						</NavLink>
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;
