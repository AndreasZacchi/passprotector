<script lang="ts">
	import { averagePasswordStrength } from '$lib/utils';

	export let passwords: [websiteID: string, website: string, password: string] | undefined;

	let leakedPasswords: Array<string>;
	let avrPassStrength = averagePasswordStrength(passwords);
</script>

<div
	class="bg-main-600 border-2 border-slate-300 w-1/2 rounded-2xl shadow-lg grid grid-cols-3 p-4 ml-1.5 text-center"
>
	<!--Stored Paswords-->
	<div class="flex flex-col place-items-center">
		<h1 class="mb-5 font-helvetica text-lg">Protected Passwords</h1>
		<p class="text-green-700 text-3xl font-bold font-helvetica">
			{#if passwords == undefined}
				0
			{:else}
				{passwords?.length}
			{/if}
		</p>
	</div>

	<!--Leaked Passwords-->
	<div class="flex flex-col place-items-center">
		<h1 class="mb-5 font-helvetica text-lg">Leaked Passwords</h1>
		{#if leakedPasswords == undefined}
			<p class="text-green-700 text-3xl font-bold font-helvetica">0</p>
		{:else}
			<p class="text-red-700 text-3xl font-bold font-helvetica">{leakedPasswords.length}</p>
		{/if}
	</div>

	<!--Average password strength-->
	<div class="flex flex-col place-items-center">
		<h1 class="mb-5 font-helvetica text-lg">Average Password Strength</h1>
		{#if avrPassStrength == -1}
			<p class="text-green-700 text-2xl font-bold font-helvetica">Generate To Get Started</p>
		{:else if avrPassStrength >= 3.8}
			<p class="text-green-500 text-3xl font-bold font-helvetica">GREAT</p>
		{:else if avrPassStrength >= 3}
			<p class="text-green-700 text-3xl font-bold font-helvetica">Good</p>
		{:else if avrPassStrength >= 2}
			<p class="text-yellow-500 text-3xl font-bold font-helvetica">Ok</p>
		{:else if avrPassStrength > 1}
			<p class="text-red-800 text-3xl font-bold font-helvetica">Bad</p>
		{:else if avrPassStrength <= 1}
			<p class="text-red-500 text-3xl font-bold font-helvetica">Terrible</p>
		{/if}
	</div>
</div>
