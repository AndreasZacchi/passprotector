<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Passwords from '$lib/components/Passwords.svelte';
	import {
		getPassword,
		passwordStrength,
		averagePasswordStrength,
		generatePassword
	} from '$lib/utils';
	import { Record } from 'pocketbase';
	import { component_subscribe, each } from 'svelte/internal';
	import { boolean } from 'zod';

	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};

	let avrPassStrength = averagePasswordStrength(data.passwords);
	let leakedPasswords: Array<string>;
	let suggestions: [suggestion: string, passwordID: string] | undefined;
	let deleteThisWebsiteId: string;

	//PopUp divs (Hidden/Visible)
	let activeNewPassDiv = false;
	let activeDeletePassDiv = false;

	//Password strength colors
	let greatPassColor = 'FF5733';
	let goodPassColor = 'green-700';
	let okPassColor = 'yellow-500';
	let badPassColor = 'red-800';
	let terriblePassColor = 'red-500';

	//New password variables
	let newWebInput = '';
	let newPassInput = '';
	let passStrength = 0;
	$: passStrength = passwordStrength(newPassInput);

	function passStrengthBorderColor(passwordStrength: number, password: string) {
		if (passStrength < 1 && password != '') {
			return 'border-red-500';
		} else if (passStrength < 2 && password != '') {
			return 'border-red-800';
		} else if (passStrength < 3 && password != '') {
			return 'border-green-700';
		} else if (passStrength <= 4 && password != '') {
			return 'border-green-500';
		} else {
			return 'border-slate-700';
		}
	}
	let borderColor = passStrengthBorderColor(passStrength, newPassInput);
	$: borderColor = passStrengthBorderColor(passStrength, newPassInput);
</script>

<!--Main div-->
<div class="relative flex justify-center">
	<!--Dashboard div-->
	<div class="flex flex-col w-full p-4">
		<!--Stats div-->
		<div class="flex flex-row h-40">
			<!--Suggestions div-->
			<div
				class="bg-main-600 border-2 border-slate-300 rounded-2xl p-4 shadow-lg flex flex-col w-1/2 mr-1.5"
			>
				<label for="suggestions" class="text-lg font-helvetica">Suggestions</label>
				<ul
					id="suggestions"
					class="bg-slate-200 hover:shadow-inner w-full rounded-lg px-2 py-1 h-full overflow-auto flex relative flex-col"
				>
					{#if suggestions != undefined}
						{#each suggestions as [suggestion, passwordIndex]}
							<li class="text-red-500">{suggestion}</li>
						{/each}
					{:else}
						<li>No suggestions at the moment</li>
					{/if}
				</ul>
			</div>

			<!--Statistics-->
			<div
				class="bg-main-600 border-2 border-slate-300 w-1/2 rounded-2xl shadow-lg grid grid-cols-3 p-4 ml-1.5 text-center"
			>
				<!--Stored Paswords-->
				<div class="flex flex-col place-items-center">
					<h1 class="mb-5 font-helvetica text-lg">Protected Passwords</h1>
					<p class="text-green-700 text-3xl font-bold font-helvetica">
						{#if data.passwords == undefined}
							0
						{:else}
							{data.passwords?.length}
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
		</div>

		<!--Password list div-->
		<div class="bg-slate-600 border-2 border-slate-300 mt-3 rounded-2xl shadow-lg">
			<!--Control bar div-->
			<div class="p-2 border-b-[1px] border-slate-200">
				<button
					on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
					class="px-1 py-0.5 w-36 bg-main-300 hover:bg-opacity-[0.85] rounded-lg"
					>New Password</button
				>
			</div>

			<div class="p-2 rounded-b-2xl">
				<Passwords passwords={data.passwords} />
			</div>
		</div>
	</div>

	<!--New password popup div-->
	<div
		id="newPassword"
		class:activeNewPassDiv={activeNewPassDiv === true}
		class="z-10 absolute hidden items-center justify-center h-[calc(100vh-4rem)] w-full bg-black bg-opacity-30"
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
				<!--Type bar-->
				<div class="flex flex-col w-[15%] h-full px-1.5 py-3 bg-main-100">
					<button class="bg-main-200 hover:bg-opacity-[0.85] shadow-md mb-3 h-8">Account</button>
					<button class="bg-main-200 hover:bg-opacity-[0.85] shadow-md mb-3 h-8">Credit card</button
					>
				</div>

				<!--Password input-->
				<form
					action="?/generatePassword"
					method="POST"
					class="w-full h-full flex px-4 py-2 flex-col"
				>
					<h1 class="text-2xl font-helvetica">Password</h1>
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
							class="bg-main-200 px-2 w-20 mt-5 hover:bg-opacity-[85%]">Save</button
						>
					{:else}
						<button
							disabled
							type="submit"
							on:click={() => (activeNewPassDiv = !activeNewPassDiv)}
							class="bg-main-200 px-2 w-20 mt-5 bg-opacity-[50%]">Save</button
						>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.activeNewPassDiv {
		display: flex;
	}
	.activeDeletePassDiv {
		display: flex;
	}
</style>
