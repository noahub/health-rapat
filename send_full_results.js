// send_full_results.js
// Mirrors send_full_results.php functionality using jQuery and Firestore

// Helper function to sanitize input
function testInput(data) {
	return $("<div>").text($.trim(data)).html();
}

$(document).ready(() => {
	$("#fullHealthForm").on("submit", (e) => {
		e.preventDefault();

		// Collect and sanitize all fields
		const institution = testInput($("#inst").val());
		const pq1 = testInput($("#pq1").val());
		const pq2 = testInput($("#pq2").val());
		const pq3 = testInput($("#pq3").val());
		const pq4 = testInput($("#pq4").val());

		const p1 = testInput($("#p1").val());
		const p2Arr = $("#p2").val() || [];
		const p2 = testInput(Array.isArray(p2Arr) ? p2Arr.join(",") : p2Arr);
		const p3 = testInput($("#p3").val());
		const p4 = testInput($("#p4").val());
		const p5 = testInput($("#p5").val());
		const p6a = testInput($("#p6a").val());
		const p6b = testInput($("#p6b").val());
		const p6c = testInput($("#p6c").val());
		const p7 = testInput($("#p7").val());
		const p8 = testInput($("#p8").val());

		const s1 = testInput($("#s1").val());
		const s2 = testInput($("#s2").val());
		const s3 = testInput($("#s3").val());
		const s4 = testInput($("#s4").val());
		const s5 = testInput($("#s5").val());

		const c1 = testInput($("#c1").val());
		const c2a = testInput($("#c2a").val());
		const c2b = testInput($("#c2b").val());
		const c3 = testInput($("#c3").val());
		const c4a = testInput($("#c4a").val());
		const c4b = testInput($("#c4b").val());
		const c4c = testInput($("#c4c").val());
		const c5Arr = $("#c5").val() || [];
		const c5 = testInput(Array.isArray(c5Arr) ? c5Arr.join(",") : c5Arr);

		const o1 = testInput($("#o1").val());
		const o2 = testInput($("#o2").val());
		const o3a = testInput($("#o3a").val());
		const o3b = testInput($("#o3b").val());
		const o3c = testInput($("#o3c").val());
		const o4 = testInput($("#o4").val());
		const o5a = testInput($("#o5a").val());
		const o5b = testInput($("#o5b").val());

		// Prepare data object
		const data = {
			institution,
			pq1,
			pq2,
			pq3,
			pq4,
			p1,
			p2,
			p3,
			p4,
			p5,
			p6a,
			p6b,
			p6c,
			p7,
			p8,
			s1,
			s2,
			s3,
			s4,
			s5,
			c1,
			c2a,
			c2b,
			c3,
			c4a,
			c4b,
			c4c,
			c5,
			o1,
			o2,
			o3a,
			o3b,
			o3c,
			o4,
			o5a,
			o5b,
		};

		// Save to Firestore
		firebase
			.firestore()
			.collection("full_health_form_submission")
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
