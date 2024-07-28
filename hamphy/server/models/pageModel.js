const mongoose = require("mongoose");
const { Schema } = mongoose;

const PagesSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
		},
		metaTags: {
			type: String,
		},
		metaDescription: {
			type: String,
		},
		content: {
			type: String,
		},
		faqs: {
			type: Array,
		},
	},
	{
		timestamps: true,
	}
);

const Pages = mongoose.model("Pages", PagesSchema);
module.exports = Pages;
