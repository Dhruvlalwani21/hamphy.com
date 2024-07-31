import React, { useState } from "react";
import NavBarcomponent from "../components/Nav.component";
import Sidebar from "../components/Sidebar";
import PagesTable from "../pages/Pages.Table";

function Dashboard() {
	const [currentPage, setPage] = useState("Dashboard");
	return (
		<>
			<div className="flex flex-nowrap">
				<div className="w-1/5 fixed">
					<NavBarcomponent />
					<Sidebar onClick={(e) => setPage(e)} page={currentPage} />
				</div>
				<main className="w-4/5 left-1/4 top-8 absolute h-svh">
					{currentPage === "Dashboard" ? (
						<>
							<h1 className="text-lg font-bold">Admin Dashboard</h1>
						</>
					) : (
						<PagesTable />
					)}
				</main>
			</div>
		</>
	);
}

export default Dashboard;
