<script lang="ts">
	import { Record } from 'pocketbase';

	import Button from '$lib/components/Button.svelte';
	export let data: {
		user: Record;
		passwords: [websiteID: string, website: string, password: string] | undefined;
	};
	let plan = data.user.plan;
</script>

<div class="ml-2 mt-2">
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
</div>
