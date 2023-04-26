<script lang="ts">
	import { Record } from 'pocketbase';

	import Button from '$lib/components/Button.svelte';
	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};
	let plan = data.user.plan;
</script>

<div class="flex flex-col bg-slate-200 w-[90vw] min-h-[100vh] items-center">
	<div class="bg-white w-[80%] mt-8 px-8 flex flex-row">
		<div class="w-48 h-48">Matty</div>
		<div class="ml-4 flex flex-col">
			<p>Navn</p>
			<p>Mail</p>
			<p>Plan</p>
		</div>
		<div class="ml-2 flex justify-end w-full">
			<div class="flex flex-col mr-2">
				<p>Payment plan</p>
				<p>Per month</p>
				<p>Additional fees</p>
				<p>Total</p>
			</div>
		</div>
	</div>
	<div class="bg-white w-[80%] mt-8">
		<p>teskt2</p>
	</div>
</div>

<!-- <div class="ml-2 mt-2">
	Your current plan is {data.user.plan}
	<div class="flex flex-col">
		<form action="?/changePlan" method="POST">
			<label for="plan">Change your plan</label>
			<select required id="plan" name="plan" class="text-lg" bind:value={plan}>
				<option value="Free">Free</option>
				<option value="Basic">Basic</option>
				<option value="Premium">Premium</option>
			</select>
			<Button text="Confirm" />
		</form>
	</div>
</div> -->
