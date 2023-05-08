<script lang="ts">
	import { passwordStrength } from '$lib/utils';

	let newPassInput = '';
	let newWebInput = '';
	let passStrength = 0;
	$: passStrength = passwordStrength(newPassInput);
	export let activeNewPassDiv: boolean;

	function passStrengthBorderColor(password: string) {
		if (password == '') return 'border-slate-700';
		else if (passStrength < 1) {
			return 'border-red-500';
		} else if (passStrength < 2) {
			return 'border-red-800';
		} else if (passStrength < 3) {
			return 'border-green-700';
		} else if (passStrength <= 4) {
			return 'border-green-500';
		} else {
			return 'border-slate-700';
		}
	}
	let borderColor = 'border-slate-700';
	$: borderColor = passStrengthBorderColor(newPassInput);
</script>

<div
	id="newPassword"
	class:activeNewPassDiv={activeNewPassDiv === true}
	class="z-30 absolute hidden items-center justify-center h-[100vh] w-full bg-black bg-opacity-30"
>
	<!--Menu div-->
	<div class="flex flex-col z-30 absolute h-[50vh] w-[50vw] bg-white rounded-md">
		<!--Control bar-->
		<div class="h-10 p-2 bg-slate-200">
			<button
				on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
				on:click={() => (newPassInput = '')}
				on:click={() => (newWebInput = '')}
				class="hover:bg-opacity-[0.85] px-4 bg-red-400 rounded-lg"
			>
				Close
			</button>
		</div>
		<!--Popup div content-->
		<div class="flex flex-row h-full w-full">
			<!--Password input-->
			<form action="?/generatePassword" method="POST" class="w-full h-full flex px-4 py-2 flex-col">
				<h1 class="text-2xl font-helvetica">New Password</h1>
				<span class="text-sm"
					>Your password will be encrypted, no one will be able to read it except you.</span
				>
				<label for="website" class="mt-3">Website</label>
				<input
					bind:value={newWebInput}
					id="website"
					name="website"
					class="focus:bg-slate-200 hover:bg-slate-200 outline-none focus:shadow-inner px-0.5 border-b-2 border-slate-700"
				/>
				<label for="passwordInput" class="mt-3">Password</label>
				<input
					bind:value={newPassInput}
					id="userPassword"
					name="userPassword"
					class="focus:bg-slate-200 hover:bg-slate-200 outline-none focus:shadow-inner px-0.5 border-b-2 {borderColor}"
				/>
				{#if newPassInput != '' && newWebInput != ''}
					{#if passStrength != 4}
						<!--Error message div-->
						<form action="?/generatePassword" method="POST" class="flex flex-row">
							<input id="website" name="website" class="hidden" value={newWebInput} />
							<p>We would not recommend using this password, let us</p>
							<button type="submit" class="px-1 underline text-blue-500">generate</button>
							<p>a better one</p>
						</form>
					{/if}
					<button
						type="submit"
						on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
						class="bg-main-orange-300 font-semibold px-2 w-20 mt-5 hover:bg-opacity-[90%] text-white"
						>Save</button
					>
				{:else}
					<button
						disabled
						type="submit"
						on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
						class="bg-main-orange-300 px-2 w-20 mt-5 bg-opacity-[70%] text-white">Save</button
					>
				{/if}
			</form>
		</div>
	</div>
</div>

<style>
	.activeNewPassDiv {
		display: flex;
	}
</style>
