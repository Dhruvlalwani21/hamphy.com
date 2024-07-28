const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// routes
router.get("/:id", pageController.getPageByName);
router.get("/", pageController.getAllPages);
router.post("/", pageController.createPage);
router.put("/:id", pageController.updatePage);

module.exports = router;
