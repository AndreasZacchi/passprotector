<script lang="ts">
	import { passwordStrength } from '$lib/utils';
	import zxcvbn from 'zxcvbn-typescript';

	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let strongPasswords: number = 0;
	let okPasswords: number = 0;
	let weakPasswords: number = 0;

	if (passwords != undefined) {
		passwords.forEach(([websiteID, website, password]) => {
			let passStrength = passwordStrength(password);
			if (passStrength >= 2.66) {
				strongPasswords++;
			} else if (passStrength >= 1.33) {
				okPasswords++;
			} else {
				weakPasswords++;
			}
		});
	}
</script>

<div class="flex flex-col bg-white rounded-xl p-4 items-center shadow-lg h-full w-full">
	<h1 class="text-2xl justify-self-start">Ranked Passwords</h1>
	<div class="w-full flex flex-row justify-evenly mt-4 text-xl">
		<!-- Number of strong passwords -->
		<div
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20"
		>
			<h1 class="">Strong</h1>
			<p class="text-green-700 font-semibold text-3xl">{strongPasswords}</p>
		</div>

		<!-- 		<hr class="w-[2px] border-y-[40px] mx-4" />
	 -->
		<!-- Number of ok passwords -->
		<div
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20 mx-2"
		>
			<h1>Ok</h1>
			<p class="text-yellow-600 font-semibold text-3xl">{okPasswords}</p>
		</div>

		<!-- Number of weak passwords -->
		<div
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20"
		>
			<h1>Weak</h1>
			<p class="text-red-700 font-semibold text-3xl">{weakPasswords}</p>
		</div>
	</div>
</div>
