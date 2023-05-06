<script lang="ts">
	export let passwords: [websiteID: string, website: string, password: string] | undefined;
	

	let shownData: string;

	const DATA_COUNT = 3;
	const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

	const labels = { count: 3 };
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: Utils.numbers(NUMBER_CFG),
				borderColor: Utils.CHART_COLORS.red,
				backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5)
			},
			{
				label: 'Dataset 2',
				data: Utils.numbers(NUMBER_CFG),
				borderColor: Utils.CHART_COLORS.blue,
				backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5)
			}
		]
	};
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<!-- Chart menu -->
	<div class="flex flex-row w-full items-center justify-center">
		<h1 class="text-2xl text-center">{shownData} Over Time</h1>
		<select id="graphData" class="justify-self-end place-self-end">
			<option value="ranked">Ranked Passwords</option>
			<option value="score">Password Score</option>
			<option value="leakRisk">Password Leak Risk</option>
		</select>
	</div>
	<!-- installer chart.js -->
	<!-- Midlertidig -->
	<div class="flex border-2 border-slate-200 h-full w-full items-center justify-center">
		<p>Chart</p>
	</div>
</div>
