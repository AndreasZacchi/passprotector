<script>
	import Input from '$lib/components/Input.svelte';
	export let form: FormData;
</script>

<form action="?/login" method="POST" class="bg-gray-500 py-2">
	<Input
		type="email"
		id="email"
		label="Email"
		value={form?.data?.email ?? ''}
		errors={form?.errors.email}
	/>
	<div class="mt-2">
		<label for="password">Password</label> <input type="password" name="password" />
	</div>
	<div class="mt-2">
		<button type="submit">Login</button>
	</div>
</form>
