<script lang="ts">
	import Passwords from '$lib/components/Passwords.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import { string } from 'zod';
	import { Record } from 'pocketbase';
	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};
	let searchTerm: string;

	$: console.log(searchTerm);
</script>

<div class="bg-main-gray-100 w-[90vw] flex flex-col place-items-center px-20 pt-8">
	<div class="w-[100%] mb-10">
		<Searchbar id="searchBar" bind:searchTerm />
	</div>
	<!--Passwordlist-->
	<Passwords passwords={data.passwords} bind:searchTerm />
</div>
