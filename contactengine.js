// contactengine.js
// Mirrors contactengine.php functionality for frontend JS

// Helper function to sanitize input
const sanitizeInput = (input) => {
	return input.trim().replace(/<|>|"|'|&/g, (match) => {
		const map = {
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"&": "&amp;",
		};
		return map[match];
	});
};

// Form submit handler
$(document).ready(() => {
	$("#contactForm").on("submit", (e) => {
		e.preventDefault();

		// Collect and sanitize form data
		const first_name = sanitizeInput($("#first_name").val());
		const last_name = sanitizeInput($("#last_name").val());
		const email = sanitizeInput($("#email").val());
		const organization = sanitizeInput($("#organization").val());
		const message = sanitizeInput($("#message").val());

		// Prepare data object
		const data = {
			first_name,
			last_name,
			email,
			organization,
			message,
		};

		// Save to Firestore
		firebase
			.firestore()
			.collection("contact_form")
			.add(data)
			.then(() => {
				window.location.href = "index.html";
			})
			.catch((error) => {
				console.log(error);
				window.location.href = "error.html";
			});
	});
});
