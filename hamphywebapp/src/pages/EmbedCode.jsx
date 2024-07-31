import React from "react";
import NavBarcomponent from "../components/NavBar.component";
import Footercomponent from "../components/Footer.component";
import "../css/styles.css";
import "../css/style.css";

function EmbedCode() {
	function getId(url) {
		var regExp =
			/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = url.match(regExp);
		if (match && match[2].length == 11) {
			return match[2];
		} else {
			alert("Please enter a YouTube video URL.");
			return false;
		}
	}
	function generateEmbedCode() {
		const videoUrl = document.getElementById("videoUrl").value.trim();
		const width = document.getElementById("width").value.trim();
		const height = document.getElementById("height").value.trim();
		const startTime = document
			.getElementById("startTime")
			.value.trim();
		const endTime = document.getElementById("endTime").value.trim();
		const loopVideo = document.getElementById("loopVideo").checked;
		const autoPlay = document.getElementById("autoPlay").checked;
		const noFullscreenButton = document.getElementById(
			"noFullscreenButton"
		).checked;
		const noPlayerControls = document.getElementById(
			"noPlayerControls"
		).checked;
		const modestBranding =
			document.getElementById("modestBranding").checked;
		const privacyEnhanced =
			document.getElementById("privacyEnhanced").checked;
		const responsive = document.getElementById("responsive").checked;
		const noUnrelatedVideos = document.getElementById(
			"noUnrelatedVideos"
		).checked;
		const showCaptions =
			document.getElementById("showCaptions").checked;
		const disableFullscreenButton = document.getElementById(
			"disableFullscreenButton"
		).checked;
		const disableKeyboardShortcuts = document.getElementById(
			"disableKeyboardShortcuts"
		).checked;
		const doNotAutohidePlayBar = document.getElementById(
			"doNotAutohidePlayBar"
		).checked;

		if (!videoUrl) {
			alert("Please enter a YouTube video URL.");
			return;
		}

		let videoId = getId(videoUrl);

		let embedUrl = privacyEnhanced
			? `https://www.youtube-nocookie.com/embed/${videoId}`
			: `https://www.youtube.com/embed/${videoId}`;
		let params = [];

		if (startTime) params.push(`start=${startTime}`);
		if (endTime) params.push(`end=${endTime}`);
		if (loopVideo) params.push("loop=1", `playlist=${videoId}`);
		if (autoPlay) params.push("autoplay=1");
		if (noFullscreenButton || disableFullscreenButton)
			params.push("fs=0");
		if (noPlayerControls) params.push("controls=0");
		if (modestBranding) params.push("modestbranding=1");
		if (noUnrelatedVideos) params.push("rel=0");
		if (showCaptions) params.push("cc_load_policy=1");
		if (disableKeyboardShortcuts) params.push("disablekb=1");
		if (doNotAutohidePlayBar) params.push("autohide=0");

		embedUrl += params.length ? `?${params.join("&")}` : "";

		const embedCode = `<iframe width="${width}" height="${height}" src="${embedUrl}" frameborder="0" ${
			noPlayerControls
				? ""
				: 'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"'
		} ${disableFullscreenButton ? "" : "allowfullscreen"}></iframe>`;

		document.getElementById("embedCode").value = embedCode;
	}

	return (
		<div>
			<NavBarcomponent />
			<>
				<div className="container justify-center ml-1/2">
					<h3>YouTube Embed Code Generator</h3>
					<form id="embedForm">
						<label for="videoUrl">YouTube Video URL:</label>
						<input
							type="text"
							id="videoUrl"
							name="videoUrl"
							placeholder="Enter YouTube URL"
							required
						/>

						<label for="width">Width (pixels):</label>
						<input
							type="number"
							id="width"
							name="width"
							min="1"
							value="560"
							required
						/>

						<label for="height">Height (pixels):</label>
						<input
							type="number"
							id="height"
							name="height"
							min="1"
							value="315"
							required
						/>

						<label for="startTime">Start Video at (seconds):</label>
						<input
							type="number"
							id="startTime"
							name="startTime"
							min="0"
							placeholder="Start Time (optional)"
						/>

						<label for="endTime">End Video at (seconds):</label>
						<input
							type="number"
							id="endTime"
							name="endTime"
							min="0"
							placeholder="End Time (optional)"
						/>

						<span
							type="button"
							onClick={() => {
								var advancedOptions =
									document.getElementById("advancedOptions");
								if (advancedOptions.classList.contains("show")) {
									advancedOptions.classList.remove("show");
								} else {
									advancedOptions.classList.add("show");
								}
							}}
							id="toggleAdvancedOptions"
							style={{ marginBottom: "10px" }}>
							{" "}
							<i className="fa-solid fa-chevron-right"></i> Advanced
							Options
						</span>
						<div
							id="advancedOptions"
							className="collapse2"
							style={{ marginBottom: "10px" }}>
							<label>
								<input
									type="checkbox"
									id="loopVideo"
									name="loopVideo"
								/>
								Loop video
							</label>
							<label>
								<input
									type="checkbox"
									id="autoPlay"
									name="autoPlay"
								/>
								Auto play video
							</label>
							<label>
								<input
									type="checkbox"
									id="noFullscreenButton"
									name="noFullscreenButton"
								/>
								No Fullscreen button
							</label>
							<label>
								<input
									type="checkbox"
									id="noPlayerControls"
									name="noPlayerControls"
								/>
								No player controls
							</label>
							<label>
								<input
									type="checkbox"
									id="modestBranding"
									name="modestBranding"
								/>
								No YouTube logo (modest branding)
							</label>
							<label>
								<input
									type="checkbox"
									id="privacyEnhanced"
									name="privacyEnhanced"
								/>
								Privacy enhanced (only cookie when user starts video)
							</label>
							<label>
								<input
									type="checkbox"
									id="responsive"
									name="responsive"
								/>
								Responsive (auto scale to available width)
							</label>
							<label>
								<input
									type="checkbox"
									id="noUnrelatedVideos"
									name="noUnrelatedVideos"
								/>
								Do not show unrelated videos on pause/playback
							</label>
							<label>
								<input
									type="checkbox"
									id="showCaptions"
									name="showCaptions"
								/>
								Show closed captions by default
							</label>
							<label>
								<input
									type="checkbox"
									id="disableFullscreenButton"
									name="disableFullscreenButton"
								/>
								Disable fullscreen button
							</label>
							<label>
								<input
									type="checkbox"
									id="disableKeyboardShortcuts"
									name="disableKeyboardShortcuts"
								/>
								Disable keyboard control shortcuts
							</label>
							<label>
								<input
									type="checkbox"
									id="doNotAutohidePlayBar"
									name="doNotAutohidePlayBar"
								/>
								Do not autohide play bar
							</label>
						</div>

						<button
							id="generateButton"
							type="button"
							onClick={generateEmbedCode}>
							Generate Embed Code
						</button>
					</form>

					<div id="result">
						<h3>Generated Embed Code:</h3>
						<div id="infoPopup" style={{ top: "85%", left: "50%" }}>
							Embed Code Copied!
						</div>
						<div className="textarea-container">
							<textarea id="embedCode" rows="6" readonly></textarea>
							<button
								id="copyButton"
								type="button"
								className="copy-button"
								onclick={() => {
									const text =
										document.getElementById("embedCode").innerHTML;
									navigator.clipboard.writeText(text);
								}}>
								<i className="fa-regular fa-copy"></i>
							</button>
						</div>
					</div>
				</div>
			</>
			<Footercomponent />
		</div>
	);
}

export default EmbedCode;
