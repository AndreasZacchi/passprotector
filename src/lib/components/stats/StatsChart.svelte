<script lang="ts">
	export let passwords: [websiteID: string, website: string, password: string] | undefined;
	import Chart from 'chart.js/auto';
	import { passwordStrength } from '$lib/utils';
	import { onMount } from 'svelte';

	let shownData = 'Ranked Passwords';

	let strongPasswords: string[] = [];
	let okPasswords: string[] = [];
	let weakPasswords: string[] = [];

	if (passwords != undefined) {
		passwords.forEach(([websiteID, website, password]) => {
			let passStrength = passwordStrength(password);
			if (passStrength >= 2.66) {
				strongPasswords.push(website);
			} else if (passStrength >= 1.33) {
				okPasswords.push(website);
			} else {
				weakPasswords.push(website);
			}
		});
	}

	const createChart = () => {
		var ctx = document.getElementById('rankedpasswordschart');

		const labels = ['Strong', 'ok', 'weak'];
		const chartData = {
			labels: labels,
			datasets: [
				{
					label: 'Ranked Passwords',
					data: [strongPasswords.length, okPasswords.length, weakPasswords.length],
					backgroundColor: [
						'rgba(21, 128, 61, 0.2)',
						'rgba(202, 138, 4, 0.2)',
						'rgba(185, 28, 28, 0.2)'
					],
					borderColor: ['rgba(21, 128, 61)', 'rgba(202, 138, 4)', 'rgba(185, 28, 28)'],
					borderWidth: 1
				}
			]
		};

		new Chart(ctx, {
			type: 'bar',
			data: chartData,
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	};

	onMount(createChart);
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<!-- Chart menu -->
	<div class="flex flex-row w-full items-center justify-center">
		<h1 class="text-2xl text-center">Ranked Passwords Over Chart</h1>
	</div>
	<!-- installer chart.js -->
	<!-- Midlertidig -->
	<canvas
		id="rankedpasswordschart"
		class="flex border-2 border-slate-200 h-full w-full items-center justify-center"
	/>
</div>
