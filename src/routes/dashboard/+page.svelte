<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import {
		getPassword,
		passwordStrength,
		averagePasswordStrength,
		generatePassword
	} from '$lib/utils';
	import { Record } from 'pocketbase';
	import { each } from 'svelte/internal';
	import { boolean } from 'zod';

	export let data: { user: Record; passwords: [website: string, password: string] | undefined };

	let avrPassStrength = averagePasswordStrength(data.passwords);
	let leakedPasswords: Array<string>;
	let active = false;

	//Password strength colors
	let greatPassColor = 'green-500';
	let goodPassColor = 'green-700';
	let okPassColor = 'yellow-500';
	let badPassColor = 'red-800';
	let terriblePassColor = 'red-500';

	//Show password variables and functions
	let shownPassword: number;
	let shownPasswords: Array<boolean> = [];

	if (data.passwords != undefined) {
		for (let index = 0; index < data.passwords?.length; index++) {
			shownPasswords.push(false);
		}
	}

	//New password variables
	let newWebInput = '';
	let newPassInput = '';
	let passStrength = 0;
	$: passStrength = passwordStrength(newPassInput);

	function passStrengthBorderColor(
		passwordStrength: number,
		greatColor: string,
		goodColor: string,
		badColor: string,
		terribleColor: string
	) {
		if (passStrength < 1) {
			return 'border-' + terribleColor;
		} else if (passStrength < 2) {
			return 'border-' + badColor;
		} else if (passStrength < 3) {
			return 'border-' + goodColor;
		} else if (passStrength <= 4) {
			return 'border-' + greatColor;
		} else {
			return 'border-slate-700';
		}
	}
	let borderbackGround = passStrengthBorderColor(
		passStrength,
		greatPassColor,
		goodPassColor,
		badPassColor,
		terriblePassColor
	);
	$: borderbackGround = passStrengthBorderColor(
		passStrength,
		greatPassColor,
		goodPassColor,
		badPassColor,
		terriblePassColor
	);
</script>

<!--Main div-->
<div class="relative flex justify-center">
	<!--PopUp div-->
	<div
		id="newPassword"
		class:active={active === true}
		class="z-10 absolute hidden items-center justify-center h-[calc(100vh-4rem)] w-full bg-black bg-opacity-30"
	>
		<!--Menu div-->
		<div class="flex flex-col z-30 absolute h-[50vh] w-[50vw] bg-white rounded-md">
			<!--Control bar-->
			<div class="h-10 p-2 bg-slate-200">
				<button
					on:click={() => (active = false)}
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
				<form class="w-full h-full flex px-4 py-2 flex-col">
					<h1 class="text-2xl font-helvetica">Password</h1>
					<span class="text-sm"
						>Your password will be encrypted, no one will be able to read it except you.</span
					>
					<label for="websiteInput" class="mt-3">Website</label>
					<input
						bind:value={newWebInput}
						id="websiteInput"
						class="focus:bg-slate-200 hover:bg-slate-200 outline-none focus:shadow-inner px-0.5 border-b-2 border-slate-700"
					/>

					<label for="passwordInput" class="mt-3">Password</label>
					<input
						bind:value={newPassInput}
						class="focus:bg-slate-200 hover:bg-slate-200 outline-none focus:shadow-inner px-0.5 border-b-2 {borderbackGround}"
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
							on:click={() => (active = false)}
							class="bg-main-200 px-2 w-20 mt-5 hover:bg-opacity-[85%]">Save</button
						>
					{:else}
						<button
							disabled
							type="submit"
							on:click={() => (active = false)}
							class="bg-main-200 px-2 w-20 mt-5 bg-opacity-[50%]">Save</button
						>
					{/if}
				</form>
			</div>
		</div>
	</div>

	<!--Dashboard div-->
	<div class="flex flex-col w-full p-4">
		<!--Stats div-->
		<div class="flex flex-row h-[25vh]">
			<!--Suggestions div-->
			<div class="border-2 border-slate-300 rounded-2xl p-4 shadow-lg flex flex-col w-1/2 mr-1.5">
				<h1 class="text-lg font-helvetica">Suggestions</h1>
				<div
					class="bg-slate-200 hover:shadow-inner w-full rounded-lg px-2 py-1 h-full overflow-auto flex relative flex-col"
				>
					<h1 class="">tester</h1>
					<h2 class="">tester</h2>
					<h3 class="">tester</h3>
					<h4 class="">tester</h4>
					<h5 class="">tester</h5>
					<h6 class="">tester</h6>
					<h7 class="">tester</h7>
					<h8 class="">tester</h8>
					<h9 class="">tester</h9>
					<h10 class="">tester</h10>
				</div>
			</div>

			<!--Statistics-->
			<div
				class="border-2 border-slate-300 w-1/2 rounded-2xl shadow-lg grid grid-cols-3 p-4 ml-1.5 text-center"
			>
				<!--Stored Paswords-->
				<div class="flex flex-col place-items-center">
					<h1 class="mb-5 font-helvetica text-lg">Protected Passwords</h1>
					<p class="text-green-700 text-2xl font-bold font-helvetica">
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
						<p class="text-green-700 text-2xl font-bold font-helvetica">0</p>
					{:else}
						<p class="text-red-700 text-2xl font-bold font-helvetica">{leakedPasswords.length}</p>
					{/if}
				</div>

				<!--Average password strength-->
				<div class="flex flex-col place-items-center">
					<h1 class="mb-5 font-helvetica text-lg">Average Password Strength</h1>
					{#if avrPassStrength == -1}
						<p class="text-green-700 text-xl font-bold font-helvetica">Generate To Get Started</p>
					{:else if avrPassStrength >= 3.8}
						<p class="text-{greatPassColor} text-2xl font-bold font-helvetica">GREAT</p>
					{:else if avrPassStrength >= 3}
						<p class="text-{goodPassColor} text-2xl font-bold font-helvetica">Good</p>
					{:else if avrPassStrength >= 2}
						<p class="text-{okPassColor} text-2xl font-bold font-helvetica">Ok</p>
					{:else if avrPassStrength > 1}
						<p class="text-{badPassColor} text-2xl font-bold font-helvetica">Bad</p>
					{:else if avrPassStrength <= 1}
						<p class="text-{terriblePassColor} text-2xl font-bold font-helvetica">Terrible</p>
					{/if}
				</div>
			</div>
		</div>

		<!--Password list div-->
		<div class="border-2 border-slate-300 mt-3 rounded-2xl">
			<!--Control bar div-->
			<div class="p-2 border-b-[1px] border-slate-200">
				<button
					on:click={() => (active = true)}
					class="px-1 py-0.5 w-36 bg-main-200 hover:bg-opacity-[0.85] rounded-lg"
					>New Password</button
				>
			</div>

			<div class="p-2 rounded-b-2xl">
				{#if data.passwords !== undefined}
					<table class="w-full">
						<thead>
							<tr>
								<th class="w-5/12 text-left">Websites</th>
								<th class="w-3/12" />
								<th class="w-4/12 text-left">Passwords</th>
							</tr>
						</thead>
						<tbody>
							{#each data.passwords as [website, password], i}
								<tr class="bg-white even:bg-gray-100">
									<td>
										<a class="hover:underline hover:text-blue-600" href="https://www.{website}"
											>{website}</a
										></td
									>

									<!--Buttons that affect current password-->
									<td class="flex justify-end pr-5">
										<!--Trashcan-->
										<form action="?/deletePassword" method="POST" class="">
											<input
												class="hidden"
												type="text"
												id="website"
												name="website"
												value={website}
											/>
											<div class="">
												<button type="submit" class="">
													<i class="fa-regular fa-trash-can text-lg text-red-600" />
												</button>
											</div>
										</form>

										<!--Eye-->
										{#if shownPasswords[i]}
											<button
												on:click={() => (shownPassword = i)}
												on:click={() => (shownPasswords[i] = !shownPasswords[i])}
											>
												<i class="fa-solid fa-eye-slash text-lg mx-[6.88px]" />
											</button>
										{:else}
											<button
												on:click={() => (shownPassword = i)}
												on:click={() => (shownPasswords[i] = !shownPasswords[i])}
											>
												<i class="fa-solid fa-eye text-lg mx-2" />
											</button>
										{/if}

										<!--Change password-->
										<button>
											<i
												class="fa-solid fa-arrows-rotate text-lg text-blue-500 hover:rotate-45 duration-300"
											/>
										</button>

										<!--Copy password-->
										<button on:click={() => navigator.clipboard.writeText(password)}>
											<i class="fa-regular fa-clipboard text-lg ml-2" />
										</button>
									</td>

									<!--Determines whether to show password or not-->
									{#if shownPasswords[i]}
										<td
											><button
												on:click={() => navigator.clipboard.writeText(password)}
												class="hover:underline">{password}</button
											></td
										>
										<!-- {eyeType = "fa-solid fa-eye-slash text-green-600"} -->
									{:else}
										<td>********</td>
										<!-- {eyeType = "fa-regular fa-eye text-gray-400"} -->
									{/if}
								</tr>
							{/each}
						</tbody>
					</table>
				{:else}
					<p>You dont have any passwords. Generate one to get started!</p>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.active {
		display: flex;
	}
</style>
