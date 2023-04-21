<script lang="ts">
	import { averagePasswordStrength } from '$lib/utils';
	import { Record } from 'pocketbase';

	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};

	const passStrength = Math.round((averagePasswordStrength(data.passwords) / 4) * 100);
</script>

<div class="flex bg-slate-200 w-[100vw] h-[100vh] p-10">
	<!-- Average Password Strenght -->
	<div class="flex flex-col bg-white rounded-xl p-4 justify-center items-center h-52 shadow-lg">
		<h1 class="text-2xl">Password Score</h1>
		<div
			class="flex mt-4  text-xl p-4 border-main-orange-400 border-[5px] rounded-full w-32 h-32 items-center justify-center"
			style="border-image: linear-gradient(to right, #ff6b00 {passStrength}%)"
		>
			<p class="text-center text-4xl font-semibold">{passStrength}</p>
		</div>
	</div>
</div>
