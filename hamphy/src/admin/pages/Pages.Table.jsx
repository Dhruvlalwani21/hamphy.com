import React, { useEffect, useState } from "react";
import axios from "axios";
function PagesTable() {
	const [data, setdata] = useState([]);
	useEffect(() => {
		try {
			axios
				.get(`http://localhost:4000/api/pages/`)
				.then((res) => {
					setdata(res.data);
				})
				.catch((e) => {});
		} catch (error) {}
	}, []);

	return (
		<div>
			<h1 className="text-lg font-bold">Pages</h1>

			<div className="shadow-md m-4 mt-4 p-2 w-10/12">
				<table className="w-10/12 align-middle">
					<thead className="text-left p-2 bg-slate-50">
						<th>Name</th>
						<th>Title</th>
						<th>Tags</th>
						<th>Description</th>
						<th>Edit</th>
					</thead>
					<tbody>
						{data.map((data, i) => {
							return (
								<tr>
									<td className="text-base font-medium p-3 border-b-black">
										{data.name}
									</td>
									<td className="text-base font-medium p-3 border-b-black">
										{data.title}
									</td>
									<td className="text-base font-medium p-3 border-b-black">
										{data.metaTags}
									</td>
									<td className="text-base font-medium p-3 border-b-black">
										{data.metaDescription}
									</td>
									<td className="text-base text-blue-600 font-medium p-3 border-b-black">
										Edit {"  >"}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PagesTable;
