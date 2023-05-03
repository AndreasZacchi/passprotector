<script lang="ts">
	import { passwordStrength } from '$lib/utils';
	import { Record } from 'pocketbase';
	import { each } from 'svelte/internal';
	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let strongPasswords: string[] = [];
	let okPasswords: string[] = [];
	let weakPasswords: string[] = [];

	/* Passwords checker */
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
</script>

<div
	class="flex flex-col bg-white rounded-xl p-4 items-center justify-center shadow-lg h-full w-full"
>
	<!-- TODO: make it possible to change the individual passwords shown -->
	<h1 class="text-2xl justify-self-start mb-4">Suggestions</h1>
	<div class="bg-slate-100 h-full w-full rounded-lg p-[4px] overflow-y-auto">
		<!-- High password suggestions -->
		<div>
			{#each weakPasswords as password}
				<p class="text-red-600 font-semibold mb-[3px]">
					• {password}'s password is to weak
				</p>
			{/each}
		</div>

		<!-- Medium password suggestions-->
		<div>
			{#each okPasswords as password}
				<p class="text-orange-400 font-semibold mb-[2px]">
					• {password} needs to be changed
				</p>
			{/each}
		</div>
	</div>
</div>
