<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { isValidCard } from '$lib/utils';
	export let form: ActionData;

	let active = false;

	let ccnumber = '';
	let ccname = '';
	let ccmonth = '';
	let ccyear = '';
	let cccvc = '';
	let plan = 'Free';
	let cardType = '';
	$: ccnumber = ccnumber.replace(/[^0-9]/g, '');
	$: ccname = ccname.replace(/[^A-z\ ]/g, '');
	$: ccmonth = ccmonth.replace(/[^0-9]/g, '');
	$: ccyear = ccyear.replace(/[^0-9]/g, '');
	$: cccvc = cccvc.replace(/[^0-9]/g, '');
	$: plan != 'Free' ? (active = true) : (active = false);
	$: cardType = isValidCard(ccnumber).cardType;
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center">
	<!-- Register form -->
	<form
		action="?/register"
		method="POST"
		use:enhance
		class=" shadow-2xl rounded-2xl py-2 w-fit p-16 pt-5 pb-5 text-3xl "
	>
		<div
			class:active={active == true}
			class="rounded-tr-2xl rounded-br-2xl shadow-2xl  absolute ml-96 px-5 py-5 hidden"
		>
			<h1>Secure payment</h1>
			<div>
				<label for="ccnumber">
					<span class=" text-2xl">Credit Card Number</span>
				</label>
				<div class="flex items-center">
					<img class="h-8 w-12 mr-2" alt="card type" src="../cardtypes/{cardType}.svg" />
					<input type="tel" id="ccnumber" name="ccnumber" maxlength="19" bind:value={ccnumber} />
				</div>
				{#if form?.errors?.fieldErrors.invalidCC}
					<div class="my-1 h-4 text-sm text-red-500">Invalid credit card number!</div>
				{/if}
			</div>
			<div class="mt-2 flex flex-col">
				<label for="ccname">
					<span class=" text-2xl">Credit Card Holder</span>
				</label>

				<input
					class="border-b-[2px] border-black outline-none text-lg w-80
	focus:border-main-300 focus:border-b-[3px] focus:mb-[-1px] transition delay-75
	hover:border-gray-700 hover:border-b-[3px] hover:mb-[-1px]"
					type="tel"
					id="ccname"
					maxlength="2"
					name="ccname"
					bind:value={ccname}
				/>
			</div>
			<div class="mt-2 flex flex-col">
				<label for="ccmonth">
					<span class=" text-2xl">Month</span>
				</label>

				<input
					class="border-b-[2px] border-black outline-none text-lg w-80
	focus:border-main-300 focus:border-b-[3px] focus:mb-[-1px] transition delay-75
	hover:border-gray-700 hover:border-b-[3px] hover:mb-[-1px]"
					type="tel"
					id="ccmonth"
					maxlength="2"
					name="ccmonth"
					bind:value={ccmonth}
				/>
			</div>
			<div class="mt-2 flex flex-col">
				<label for="ccyear">
					<span class=" text-2xl">Year</span>
				</label>

				<input
					class="border-b-[2px] border-black outline-none text-lg w-80
	focus:border-main-300 focus:border-b-[3px] focus:mb-[-1px] transition delay-75
	hover:border-gray-700 hover:border-b-[3px] hover:mb-[-1px]"
					type="tel"
					id="ccyear"
					maxlength="2"
					name="ccyear"
					bind:value={ccyear}
				/>
				{#if form?.errors?.fieldErrors.invalidCCDate}
					<div class="my-1 h-4 text-sm text-red-500">The credit card is expired!</div>
				{/if}
			</div>
			<div class="mt-2 flex flex-col">
				<label for="cccvc">
					<span class=" text-2xl">CVC</span>
				</label>

				<input
					class="border-b-[2px] border-black outline-none text-lg w-80
	focus:border-main-300 focus:border-b-[3px] focus:mb-[-1px] transition delay-75
	hover:border-gray-700 hover:border-b-[3px] hover:mb-[-1px]"
					type="tel"
					id="cccvc"
					maxlength="3"
					name="cccvc"
					bind:value={cccvc}
				/>
			</div>
		</div>
		<!-- Logo div -->
		<div class="flex justify-center">
			<img src="/logo.png" alt="logo" width="512" height="512" class=" h-28 w-28" />
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class=" text-4xl pb-1">Register</h1>
		</div>

		<!-- Inputs -->
		<Input
			type="email"
			label="Email"
			id="email"
			value={form?.email.toString()}
			error={form?.errors?.fieldErrors.email ? 'Email must be valid!' : undefined}
		/>
		<Input
			type="password"
			label="Password"
			id="password"
			error={form?.errors?.fieldErrors.password != undefined
				? 'Password must be at least 8 characters!'
				: undefined}
		/>
		<Input
			type="password"
			label="Confirm Password"
			id="passwordConfirm"
			error={form?.errors?.formErrors.toString()}
		/>
		<div class="flex flex-col">
			<label for="plan">Plan</label>
			<select required id="plan" name="plan" class="text-lg" bind:value={plan}>
				<option value="Free">Free</option>
				<option value="Basic">Basic</option>
				<option value="Premium">Premium</option>
			</select>
		</div>
		<!-- Button div -->
		<div class="mt-2 flex justify-center pt-3">
			<Button text="Register" textSize="text-2xl" boldness="font-semibold" width="w-8/12" />
		</div>
	</form>
</div>

<style>
	.active {
		display: block;
	}
</style>
