// send_results.js
// Mirrors send_results.php functionality using jQuery and sessionStorage

$(document).ready(() => {
	// Value mappings
	const one_values = [
		"Strongly Disagree",
		"Disagree",
		"Neutral",
		"Agree",
		"Strongly Agree",
	];
	const two_values = ["Never", "Rarely", "Sometimes", "", "Always"];
	const three_values = ["No", "", "", "To a Certain Extent", "Yes"];
	const four_values = ["Not Endorsed", "", "Neutral", "", "Widely Endorsed"];

	// Helper function to sanitize input
	function testInput(data) {
		return $("<div>").text($.trim(data)).html();
	}

	$("#healthTrialForm").on("submit", (e) => {
		e.preventDefault();

		// Get and sanitize values from sessionStorage
		const first_name = testInput(sessionStorage.getItem("first_name") || "");
		const last_name = testInput(sessionStorage.getItem("last_name") || "");
		const email = testInput(sessionStorage.getItem("email") || "");
		const location = testInput(sessionStorage.getItem("location") || "");
		const budget = testInput(sessionStorage.getItem("budget") || "");
		const process = testInput(sessionStorage.getItem("process") || "");
		const evaluate = testInput(sessionStorage.getItem("evaluate") || "");
		const question1_idx = Number(sessionStorage.getItem("question1"));
		const question2_idx = Number(sessionStorage.getItem("question2"));
		const question3_idx = Number(sessionStorage.getItem("question3"));
		const question4_idx = Number(sessionStorage.getItem("question4"));
		const question1 = testInput(one_values[question1_idx] || "");
		const question2 = testInput(two_values[question2_idx] || "");
		const question3 = testInput(three_values[question3_idx] || "");
		const question4 = testInput(four_values[question4_idx] || "");

		// Prepare data object
		const data = {
			first_name,
			last_name,
			email,
			location,
			budget,
			process,
			evaluate,
			"1_program_budgeting": question1,
			"2_criteria": question2,
			"3_resources": question3,
			"4_priority": question4,
		};

		// Save to Firestore
		firebase
			.firestore()
			.collection("health_trial_form_submission")
			.add(data)
			.then(() => {
				alert("Submission successful!");
				window.location.href = "submission_complete.html";
			})
			.catch(() => {
				alert("Submission failed. Please try again.");
			});
	});
});
