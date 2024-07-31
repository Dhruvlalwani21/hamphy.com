import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextEditor from "../components/Text-Editor";

function PagesUpdate() {
	const [data, setdata] = useState({
		name: "",
		metaTags: "",
		metaDescription: "",
		content: "",
		title: "",
		pageTitle: "",
	});
	const [loading, setLoading] = useState();
	const Navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		try {
			setLoading(true);
			axios
				.get(`http://localhost:4000/api/pages/id/${id}`)
				.then((res) => {
					setdata(res.data);
					console.log(res.data);
					setLoading(false);
				})
				.catch((e) => {
					setLoading(false);
					Navigate("/pages");
				});
		} catch (error) {
			setLoading(false);
			Navigate("/pages");
		}
	}, []);

	function UpdateHandler() {
		try {
			setLoading(true);
			axios
				.put(`http://localhost:4000/api/pages/${id}`, data)
				.then((res) => {
					Navigate("/pages");
				})
				.catch((e) => {
					setLoading(false);
				});
		} catch (error) {
			setLoading(false);
		}
	}
	const inputHandler = (e) => {
		const { name, value } = e.target;
		setdata({ ...data, [name]: value });
	};

	if (loading) {
		return (
			<>
				<div role="status">
					<svg
						aria-hidden="true"
						className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading...</span>
				</div>
			</>
		);
	}
	return (
		<div>
			<h1 className="text-lg font-bold my-5">
				Update Page {`(${data.name})`}
			</h1>
			<div className="mr-3 top-5 border-2 rounded-md w-full p-3">
				<span className="text-base font-medium">Page Title</span>
				<input
					onChange={inputHandler}
					name="pageTitle"
					value={data.pageTitle}
					type="text"
					className="w-full mb-3 rounded-xl border-gray-200 bg-transparent p-2 mt-1 border-solid"
				/>
				<span className="text-base font-medium">Title</span>
				<input
					onChange={inputHandler}
					type="text"
					name="title"
					value={data.title}
					className="w-full mb-3 rounded-xl border-gray-200 bg-transparent p-2 mt-1 border-solid"
				/>
				<span className="text-base font-medium">
					Meta Description
				</span>
				<input
					onChange={inputHandler}
					type="text"
					name="metaDescription"
					value={data.metaDescription}
					className="w-full mb-3 rounded-xl border-gray-200 bg-transparent p-2 mt-1 border-solid"
				/>
				<span className="text-base font-medium">Meta Tags</span>
				<input
					onChange={inputHandler}
					name="metaTags"
					value={data.metaTags}
					type="text"
					className="w-full mb-3 rounded-xl border-gray-200 bg-transparent p-2 mt-1 border-solid"
				/>
				<span className="text-base font-medium">Content</span>
				<TextEditor
					onChange={(e) => setdata({ ...data, content: e })}
					value={data.content}
				/>
				<div className="flex mt-5 justify-center align-middle">
					<button
						onClick={() => UpdateHandler()}
						className="bg-red-400 text-white p-2 rounded-xl">
						Update
					</button>
				</div>
			</div>
		</div>
	);
}

export default PagesUpdate;
