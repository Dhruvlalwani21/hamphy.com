const pageModal = require("../models/pageModel");

// controller methods

// Get all pages
exports.getAllPages = async (req, res) => {
	try {
		const pages = await pageModal.find();
		res.json(pages);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Get page by ID
exports.getPageByName = async (req, res) => {
	try {
		const page = await pageModal.find({ name: req.params.name });
		if (!page) {
			return res.status(404).json({ message: "Page not found" });
		}
		res.json(page);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Create a new page
exports.createPage = async (req, res) => {
	const page = new pageModal(req.body);

	try {
		const newPage = await page.save();
		res.status(201).json(newPage);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Update page by ID
exports.updatePage = async (req, res) => {
	try {
		const page = await pageModal.findById(req.params.id);
		if (!page) {
			return res.status(404).json({ message: "Page not found" });
		}

		page.set(req.body);
		const updatedPage = await page.save();
		res.json(updatedPage);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
