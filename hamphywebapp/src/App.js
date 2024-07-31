import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import Footercomponent from "./components/Footer.component";
import NavBarcomponent from "./components/NavBar.component";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
	Outlet,
} from "react-router-dom";
import MonetizationPage from "../../hamphywebapp/src/pages/MonetizationPage";
import Policy from "./pages/Policy";
import About from "./pages/About";
import ThumbnailDownloader from "./pages/ThumbnailDownloader";
import ShortsThumbnail from "./pages/ShortsThumbnail";
import BannerDownloader from "./pages/BannerDownloader";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import EmbedCode from "./pages/EmbedCode";
import DislikeViewer from "./pages/DislikeViewer";

function App() {
	return (
		<>
			<>
				<Router>
					<Routes>
						<Route path="/" element={<MonetizationPage />} />

						<Route path="/about" element={<About />} />
						<Route path="/privacy-policy" element={<Policy />} />
						<Route path="/disclaimer" element={<Disclaimer />} />
						<Route path="/contact-us" element={<Contact />} />
						<Route
							path="/thumbnail-downloader"
							element={<ThumbnailDownloader />}
						/>
						<Route
							path="/shorts-thumbnail-downloader"
							element={<ShortsThumbnail />}
						/>
						<Route
							path="/channel-banner-downloader"
							element={<BannerDownloader />}
						/>
						<Route
							path="/dislike-viewer"
							element={<DislikeViewer />}
						/>
						<Route
							path="/embed-code-generator"
							element={<EmbedCode />}
						/>
					</Routes>
				</Router>
			</>
		</>
	);
}

export default App;
