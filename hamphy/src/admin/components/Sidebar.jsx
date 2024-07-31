import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onClick, page }) => {
	return (
		<div>
			<div className="sidebar bg-slate-50 h-svh">
				<ul className="menu-items">
					<NavLink onClick={() => onClick("Dashboard")}>
						<li
							className={
								page === "Dashboard"
									? "bg-red-200 sidebar-tabs flex justify-between p-3 rounded-xl shadow-sm  align-middle"
									: "sidebar-tabs flex justify-between rounded-xl p-3 shadow-sm  align-middle"
							}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
								className="w-4 h-4"
							/>
							<span className="text-lg font-medium ">Dashboard</span>
							<span className="text-lg font-medium ">{">"}</span>
						</li>{" "}
					</NavLink>

					<NavLink onClick={() => onClick("Pages")}>
						<li
							className={
								page === "Pages"
									? "bg-red-200 sidebar-tabs rounded-xl flex justify-between p-3  align-middle shadow-sm"
									: "sidebar-tabs flex justify-between p-3 shadow-sm align-middle"
							}>
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
};

export default Sidebar;
