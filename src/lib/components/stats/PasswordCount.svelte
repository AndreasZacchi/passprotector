<script lang="ts">
	import { passwordStrength } from '$lib/utils';
	import Passwords from '$lib/components/Passwords.svelte';

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

	let ShowPasswords: boolean = false;
	let ShownPasswords: string[] = [];
	const HandleShowPasswords = (passwords: string[]) => {
		ShownPasswords = passwords;
		ShowPasswords = true;
	};
</script>

<div class="flex flex-col bg-white rounded-xl p-4 items-center shadow-lg h-full w-full">
	<h1 class="text-2xl justify-self-start">Ranked Passwords</h1>
	<div class="w-full h-full flex flex-row justify-evenly items-center mt-4 text-xl">
		<!-- Number of strong passwords -->
		<button
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20 hover:bg-slate-200 duration-150"
			on:click={() => HandleShowPasswords(strongPasswords)}
		>
			<h1 class="">Strong</h1>
			<p class="text-green-700 font-semibold text-3xl">{strongPasswords.length}</p>
		</button>
		<!-- Number of ok passwords -->
		<button
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20 hover:bg-slate-200 duration-150"
			on:click={() => HandleShowPasswords(okPasswords)}
		>
			<h1>Ok</h1>
			<p class="text-yellow-600 font-semibold text-3xl">{okPasswords.length}</p>
		</button>

		<!-- Number of weak passwords -->
		<button
			class="flex flex-col items-center bg-slate-100 rounded-lg p-2 border-[1px] border-slate-200 w-20 hover:bg-slate-200 duration-150"
			on:click={() => HandleShowPasswords(weakPasswords)}
		>
			<h1>Weak</h1>
			<p class="text-red-700 font-semibold text-3xl">{weakPasswords.length}</p>
		</button>
	</div>
</div>

{#if ShowPasswords}
	<div
		class="z-20 absolute top-0 right-0 h-[100vh] w-[calc(100vw-12rem)] bg-black bg-opacity-40 flex items-center justify-center"
	>
		<div class="bg-white h-[60%] w-[70%] overflow-y-auto">
			<div class="h-10 bg-slate-200">
				<button
					on:click={() => (ShowPasswords = false)}
					class="hover:bg-opacity-[0.85] h-full px-6 bg-red-400">close</button
				>
			</div>
			<!-- TODO: Modificer Passwords -->
			<Passwords {passwords} />
		</div>
	</div>
{/if}
