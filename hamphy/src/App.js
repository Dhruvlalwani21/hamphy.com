import NavBarcomponent from "./admin/components/Nav.component";
import Sidebar from "./admin/components/Sidebar";
import Dashboard from "./admin/dashboard/Dashboard";
import PagesTable from "./admin/pages/Pages.Table";
import PagesUpdate from "./admin/pages/Pages.update";
import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="flex flex-nowrap">
					<div className="w-1/5 absolute">
						<NavBarcomponent />
						<Sidebar />
					</div>
					<main
						className="top-8 
					">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/pages" element={<PagesTable />} />
							<Route
								path="/pages/update/:id"
								element={<PagesUpdate />}
							/>
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
