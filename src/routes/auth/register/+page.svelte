<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<form action="?/register" method="POST" class="bg-gray-500 py-2">
	<Input type="email" id="email" label="Email" />
	<Input type="password" id="password" label="password" />
	<Input type="password" id="passwordConfirm" label="Confirm Password" />
	<div class="mt-2">
		<button type="submit">Register</button>
	</div>
</form>
