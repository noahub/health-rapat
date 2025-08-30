// results.js
// Mirrors results.php functionality in JS

// Get form data from sessionStorage (recommended for passing survey data between pages)
const first_name = sessionStorage.getItem("first_name") || "";
const last_name = sessionStorage.getItem("last_name") || "";
const email = sessionStorage.getItem("email") || "";
const location = sessionStorage.getItem("location") || "";
const budget = sessionStorage.getItem("budget") || "";
const process = sessionStorage.getItem("process") || "";
const evaluate = sessionStorage.getItem("evaluate") || "";
const question1 = Number(sessionStorage.getItem("question1"));
const question2 = Number(sessionStorage.getItem("question2"));
const question3 = Number(sessionStorage.getItem("question3"));
const question4 = Number(sessionStorage.getItem("question4"));
const results = [question1, question2, question3, question4];

const result_text = [
	[
		"While incremental line item budgeting has historically been the “go-to” given its simplicity and perceived fairness, this approach does not enable strategic allocation of resources. Without a good understanding of the programs and services (including their costs and outcomes) that are delivered to patients, you will not be able to use your resource allocation process to achieve your organization’s goals.",
		"While incremental line item budgeting has historically been the “go-to” given its simplicity and perceived fairness, this approach does not enable strategic allocation of resources. Having a comprehensive inventory of your organization’s programs and services (including costs and outcomes) will give you the ability to re-allocate resources from areas of low priority to high priority – and will allow you to deliver the best possible care to your patient population.",
		"Congratulations! Having a strong understanding of your organization’s programs and services will give you the platform to be able to make tough decisions with respect to resource allocation. To take things a step further, think about whether the performance data you are collecting for programs is in the form of outputs or outcomes e.g. output: number of addiction patients seen vs. outcomes: number of addiction patients who have returned to work. Another question to think about could be: how does each of the programs rank with respect to your organization’s strategic goals?",
	],
	[
		"Without a set of criteria agreed upon by the internal and external stakeholders that is connected to a healthcare organization’s strategic plan, making resource allocation decisions can be difficult at the best of times. Often it can come down to a CFO or CEO ‘waving a wand’ to decide where money is spent, a ‘squeaky wheel getting the grease’ approach, or political pressure. An explicit set of criteria can increase the rationality, transparency, and acceptability of decisions.",
		"Historically, incremental approaches where increases or decreases in budgets have been implemented across the board e.g. “everyone gets a 2% lift” or “everyone has to cut 2%” have been the dominant approach for public institutions including healthcare organizations. By developing a set of criteria that is based on your strategic plan, every resource allocation decision that is made by your organization will improve the overall care delivered to your patient population.",
		"Congratulations! Developing a set of criteria that is endorsed by internal and external stakeholders is vital to strategic resource allocation. To take things a step further, ask yourself the following questions: Are certain results or criteria more important than others (if yes – consider developing a weighted scale)? Have you scored each of your programs/services using those criteria? Do you score investment and disinvestment proposals using those criteria?",
	],
	[
		"Not re-allocating resources can mean one of two things. Either a) the distribution of resources across your programs is perfect the way it is, and not even one tweak could help bring your community closer to its vision OR b) the infrastructure is not in place to make the tough decisions that are needed to disinvest in one area, and invest in another. In a business, we must constantly be identifying and investing in our top performing products – if no new money is available, we must re-allocate resources from lowering performing products to higher performing products. Why shouldn’t we do the same in healthcare if this could mean better overall care for our patient population?",
		"In times of resources abundance and revenue growth, making budgeting decisions is relatively easy. If we don’t have money for a project or new program, we can always wait till next year when there will be more resources available. However, in today’s fiscal climate doing something new can often necessitate stopping something else. To make these decisions often requires a robust priority setting and resource allocation process and strategy. If we could be providing better overall care to our patient population, why shouldn’t we be making these re-allocation decisions?",
		"Congratulations! In today’s fiscal climate, doing something new or expanding existing services often requires stopping or disinvesting in something else that we are already doing. Do you feel these re-allocations enabled you to provide better overall care to your patient population? Were the decisions based on a good understanding of your organization’s programs/services and using explicit criteria?",
	],
	[
		"As an industry that is funded by and provides service directly to the public, many would argue that input and understanding of resource allocation among these external stakeholders is critical. Open communication and education for staff and clinicians is also vital to ensuring that budgeting decisions will be followed through, and that the process itself will be sustainable.",
		"Without understanding and support of the public, staff, and clinicians for your organization’s process, implementing decisions and sustaining priority setting and resource allocation will prove difficult. Remember, if stakeholders are meaningfully involved in the development of a process – it becomes more difficult for them to challenge the outcomes. If something happens that they don’t like, you can always ask “what didn’t you like about the process that you helped develop which generated that particular outcome?",
		"Congratulations! Having the support of the public, your staff, and clinicians is critical to sustaining a priority setting and resource allocation process. To take things a step further, ask yourself: are these groups empowered to develop proposals for investment or disinvestment? How could their understanding be enhanced and supported through capacity building or greater communication?",
	],
];

const result_class = ["#f2dede", "#fcf8e3", "#dff0d8"];
const result_title = [
	"Program Budgeting",
	"Criteria",
	"Reallocation of Resources",
	"Endorsement",
];

// Helper function to sanitize input
function testInput(data) {
	return $("<div>").text($.trim(data)).html();
}

// Save results to Firestore (mirroring PHP DB insert)
function saveResultsToFirestore() {
	const data = {
		first_name: testInput(first_name),
		last_name: testInput(last_name),
		email: testInput(email),
		location: testInput(location),
		budget: testInput(budget),
		process: testInput(process),
		evaluate: testInput(evaluate),
		question1: testInput(question1),
		question2: testInput(question2),
		question3: testInput(question3),
		question4: testInput(question4),
	};
	firebase
		.firestore()
		.collection("health_trial_form_submission")
		.add(data)
		.then(() => {
			console.log("Success!");
		})
		.catch((error) => {
			console.log("Error:", error);
		});
}

// Render results and save to Firestore
function renderResults() {
	const container = document.querySelector(".results");
	if (!container) return;
	container.innerHTML = "";
	let i = 0;
	results.forEach((result) => {
		let color, label, text;
		if (result === 4) {
			color = result_class[2];
			label = "Strength";
			text = result_text[i][2];
		} else if (result === 0) {
			color = result_class[0];
			label = "Weakness";
			text = result_text[i][0];
		} else {
			color = result_class[1];
			label = "Area for Improvement";
			text = result_text[i][1];
		}
		const div = document.createElement("div");
		div.className = "result";
		div.style.backgroundColor = color;
		div.innerHTML = `<h2>${result_title[i]}</h2><p style='font-weight:400;margin:10px 0px;text-shadow:0px 0px 1px grey;'>${label}</p>${text}`;
		container.appendChild(div);
		i++;
	});
	// Set first name in heading
	const heading = document.querySelector("h1");
	if (heading) heading.textContent = `Here are your results, ${first_name}!`;

	// Save results to Firestore
	saveResultsToFirestore();
}

document.addEventListener("DOMContentLoaded", renderResults);
