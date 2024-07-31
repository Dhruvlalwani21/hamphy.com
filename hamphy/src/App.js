import Dashboard from "./admin/dashboard/Dashboard";
import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
	Outlet,
} from "react-router-dom";

const Contact = () => {
	return (
		<>
			<h1>hi</h1>
		</>
	);
};

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/admin" element={<Dashboard />} />

					{/* <Route path="/" element={<MonetizationPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/privacy-policy" element={<Policy />} />
					<Route path="/disclaimer" element={<Disclaimer />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route
						path="/thumbnail-downloader"
						element={<Thumbnail />}
					/>
					<Route
						path="/shorts-thumbnail-downloader"
						element={<ShortThumbnail />}
					/>
					<Route
						path="/channel-banner-downloader"
						element={<BannerDownloader />}
					/>
					<Route path="/dislike-viewer" element={<DislikeViewer />} />
					<Route
						path="/embed-code-generator"
						element={<EmbedCodeMaker />}
					/> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
