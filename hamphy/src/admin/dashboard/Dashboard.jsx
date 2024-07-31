import React, { useState } from "react";
import NavBarcomponent from "../components/Nav.component";
import Sidebar from "../components/Sidebar";
import PagesTable from "../pages/Pages.Table";

function Dashboard() {
	const [currentPage, setPage] = useState("Dashboard");
	return (
		<>
			<h1 className="text-lg font-bold">Admin Dashboard</h1>
		</>
	);
}

export default Dashboard;
