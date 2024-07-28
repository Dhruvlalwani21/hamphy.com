const dotenv = require("dotenv");
const express = require("express");
const connectToMongo = require("./dbConnect");
const cors = require("cors");
const config = require("./config/config");
const app = express();
dotenv.config({
	path: "./.env",
});

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const pagesRoutes = require("./routes/pagesRoutes");
const adminRoutes = require("./routes/adminLogin");

app.use("/api/pages", pagesRoutes);
app.use("/api/admin", adminRoutes);

// Start the server
connectToMongo().then(() => {
	app.listen(config.port, () => {
		console.log(`Server is running on port ${config.port}`);
	});
});
