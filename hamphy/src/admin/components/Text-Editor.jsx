import React, { useCallback, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const TextEditor = ({ value, onChange, title }) => {
	// Define the toolbar options

	const handleChange = useCallback(
		(content) => {
			onChange(content);
		},
		[onChange]
	);

	return (
		<>
			<ReactQuill
				defaultValue={<p></p>}
				value={value}
				onChange={handleChange}
				modules={{
					toolbar: [
						["bold", "italic", "underline", "strike"], // toggled buttons
						["blockquote", "code-block"],
						["link", "image", "video", "formula"],
						[{ header: 1 }, { header: 2 }], // custom button values
						[
							{ list: "ordered" },
							{ list: "bullet" },
							{ list: "check" },
						],
						[{ script: "sub" }, { script: "super" }], // superscript/subscript
						[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
						[{ direction: "rtl" }], // text direction

						[{ size: ["small", false, "large", "huge"] }], // custom dropdown
						[{ header: [1, 2, 3, 4, 5, 6, false] }],

						[{ color: [] }, { background: [] }], // dropdown with defaults from theme
						[{ font: [] }],
						[{ align: [] }],

						["clean"],
					],
				}}
			/>
		</>
	);
};

export default React.memo(TextEditor);
