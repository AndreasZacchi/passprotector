<script lang="ts">
	import { Record } from 'pocketbase';
	import PasswordScore from '$lib/components/stats/PasswordScore.svelte';
	import PasswordCount from '$lib/components/stats/PasswordCount.svelte';
	import PasswordLeakRisk from '$lib/components/stats/PasswordLeakRisk.svelte';
	import StatsChart from '$lib/components/stats/StatsChart.svelte';
	import Suggestions from '$lib/components/stats/Suggestions.svelte';

	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};
</script>

<div class="grid grid-cols-4 grid-rows-3 gap-10 bg-slate-200 w-[calc(100vw-12rem)] h-[100vh] p-10">
	<div class="col-start-1 col-span-1">
		<PasswordScore passwords={data.passwords} />
	</div>
	<div class="col-start-2 col-span-1">
		<PasswordCount passwords={data.passwords} />
	</div>
	<div class="col-start-3 col-span-1">
		<PasswordLeakRisk passwords={data.passwords} />
	</div>
	<div class="col-start-4 col-span-1 row-start-1 row-span-3">
		<Suggestions passwords={data.passwords} />
	</div>
	<div class="col-start-1 col-span-3 row-start-2 row-span-2">
		<StatsChart passwords={data.passwords} />
	</div>
</div>
