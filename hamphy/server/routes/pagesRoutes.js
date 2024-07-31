const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// routes
router.get("/:name", pageController.getPageByName);
router.get("/id/:id", pageController.getPageById);
router.get("/", pageController.getAllPages);
router.post("/", pageController.createPage);
router.put("/:id", pageController.updatePage);

module.exports = router;
