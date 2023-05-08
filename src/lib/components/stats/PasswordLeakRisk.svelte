<script lang="ts">
	import { onMount } from 'svelte';
	import { averagePasswordStrength } from '$lib/utils';

	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let gradientId: string;

	onMount(() => {
		gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
	});

	let leakPercentage = Math.round(100 - (averagePasswordStrength(passwords) / 4) * 100);
	$: leakPercentage == 125 ? (leakPercentage = 50) : null;

	let indicatorAngle = 50;
	$: indicatorAngle = (leakPercentage / 100) * 180 - 90;
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<h1 class="text-2xl justify-self-start">Password Leak Risk</h1>
	<div class="flex flex-row w-full h-full items-center justify-center">
		<img class="h-2/3" src="/RiskGauge.png" alt="Risk Gauge" />
		<img
			class="absolute h-40 mt-20"
			style="transform: rotate({indicatorAngle}deg);"
			src="/GaugeIndicator.png"
			alt="Indicator"
		/>
	</div>
</div>
