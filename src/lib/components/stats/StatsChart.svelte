<script lang="ts">
	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let shownData: string;
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<!-- Chart menu -->
	<div class="flex flex-row">
		<h1 class="text-2xl">{shownData} Over Time</h1>
		<select id="graphData" class="">
			<option value="ranked">Ranked Passwords</option>
			<option value="score">Password Score</option>
			<option value="leakRisk">Password Leak Risk</option>
		</select>
	</div>
	<!-- installer chart.js -->
</div>
