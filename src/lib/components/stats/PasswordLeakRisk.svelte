<script lang="ts">
	import { onMount } from 'svelte';
	import { averagePasswordStrength } from '$lib/utils';

	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let gradientId: string;

	onMount(() => {
		gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
	});

	const leakPercentage = Math.round(100 - (averagePasswordStrength(passwords) / 4) * 100);
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<h1 class="text-2xl justify-self-start">Password Leak Risk</h1>
	<div class="flex flex-row w-full h-full">
		<div class="flex flex-col h-full justify-between items-center mr-1">
			<h2>High</h2>
			<h2>Low</h2>
		</div>
		<svg class="w-full h-full rounded-tr-lg rounded-br-lg border-l-[2px] border-slate-200">
			<defs>
				<linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" style="stop-color:crimson; stop-opacity:1" />
					<stop offset="100%" style="stop-color:lightgreen; stop-opacity:1" />
				</linearGradient>
			</defs>
			<rect width="100%" height="100%" fill="url(#{gradientId})" />
			<rect width="100%" height={100 - leakPercentage + '%'} fill="white" />
		</svg>
	</div>
</div>
