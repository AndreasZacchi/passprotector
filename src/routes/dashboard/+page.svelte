<script lang="ts">
	import NewPasswordPopup from '$lib/components/NewPasswordPopup.svelte';
	import PasswordStatistics from '$lib/components/PasswordStatistics.svelte';
	import Passwords from '$lib/components/Passwords.svelte';
	import { Record } from 'pocketbase';
	import PasswordSuggestions from '$lib/components/PasswordSuggestions.svelte';

	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};

	let activeNewPassDiv = false;
</script>

<!--Main div-->
<div class="relative flex justify-center bg-main2-60">
	<!--Dashboard div-->
	<div class="flex flex-col w-full p-4">
		<!--Stats div-->
		<div class="flex flex-row h-40">
			<!--Suggestions div-->
			<PasswordSuggestions />

			<!--Statistics-->
			<PasswordStatistics passwords={data.passwords} />
		</div>
		<!--Password list div-->
		<div class="mt-3 rounded-2xl shadow-lg">
			<!--Control bar div-->
			<div class="p-2 bg-main2-30 rounded-t-lg">
				<button
					on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
					class="px-1 py-0.5 w-36 bg-main-300 hover:bg-opacity-[0.85] rounded-lg"
					>New Password</button
				>
			</div>
			<Passwords passwords={data.passwords} />
		</div>
	</div>

	<!--New password popup div-->
	<NewPasswordPopup bind:activeNewPassDiv />
</div>
