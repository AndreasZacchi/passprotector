<script lang="ts">
	import { averagePasswordStrength } from '$lib/utils';
	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let passStrength = Math.round((averagePasswordStrength(passwords) / 4) * 100);

	$: passStrength == -25 ? (passStrength = 0) : null;
	$: circleRadius = 50;
	$: circleCircumference = 2 * Math.PI * circleRadius;
	$: circleOffset = circleCircumference - (passStrength / 100) * circleCircumference;
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<h1 class="text-2xl justify-self-start">Password Score</h1>
	<div class="h-[calc(100%-2rem)] w-full">
		<svg class="h-full w-full" viewBox="0 0 120 120">
			<circle cx="60" cy="60" r={circleRadius} stroke="#ddd" stroke-width="4" fill="transparent" />
			<circle
				cx="60"
				cy="60"
				r={circleRadius}
				stroke="#ff6b00"
				stroke-width="4"
				fill="transparent"
				stroke-dasharray={circleCircumference}
				stroke-dashoffset={circleOffset}
				transform="rotate(-90 60 60)"
			/>
			<g transform="translate(60, 60)">
				<text x="0" y="0" text-anchor="middle" dy=".3em" font-size="35">{passStrength}</text>
			</g>
		</svg>
	</div>
</div>
