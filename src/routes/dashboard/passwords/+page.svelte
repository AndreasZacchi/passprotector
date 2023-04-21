<script lang="ts">
	import Passwords from '$lib/components/Passwords.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import { string } from 'zod';
	import { Record } from 'pocketbase';
	import NewPasswordPopup from '$lib/components/NewPasswordPopup.svelte';
	import activeNewPassDiv from '$lib/components/NewPasswordPopup.svelte';
	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};
	let searchTerm: string;

	$: console.log(searchTerm);

	let newPassDiv = false;
</script>

<NewPasswordPopup activeNewPassDiv={newPassDiv} />
<div class="bg-slate-200 min-h-[100vh] w-[90vw] flex flex-col items-center px-20 pt-8">
	<!--Site menu-->
	<div class="w-[100%] mb-14 flex flex-row bg-white rounded-md p-2 shadow-sm">
		<Searchbar id="searchBar" bind:searchTerm />
		<button
			on:click={() => (newPassDiv = !newPassDiv)}
			class="text-md w-[12%] bg-main-orange-300 text-white rounded-md hover:bg-opacity-[85%] px-2"
		>
			<i class="fa-solid fa-plus" />
			New Password
		</button>
	</div>
	<!--Passwordlist-->
	<Passwords passwords={data.passwords} bind:searchTerm />
</div>
