<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center">
	<!-- Register form -->
	<form
		action="?/login"
		method="POST"
		use:enhance
		class=" shadow-2xl rounded-2xl py-2 w-fit p-16 pt-5 pb-5 text-3xl "
	>
		<!-- Logo div -->
		<div class="flex justify-center">
			<img src="/logo.png" alt="logo" width="512" height="512" class=" h-28 w-28" />
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class=" text-4xl pb-1">Login</h1>
		</div>

		<!-- Inputs -->
		<Input type="email" label="Email" id="email" value={form?.email.toString()} />
		<Input type="password" label="Password" id="password" error={form?.error} />
		<!-- Button div -->
		<div class="mt-2 flex justify-center pt-3">
			<Button text="Login" textSize="text-2xl" boldness="font-semibold" width="w-8/12" />
		</div>
	</form>
</div>
