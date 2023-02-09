<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>


<div class="flex justify-center h-[calc(100vh-4rem)] items-center border-solid border-4 border-red-600">
	<form action="?/register" method="POST" class="py-2 w-1/2">
		<Input type="email" id="email" label="Email" />
		<Input type="password" id="password" label="password" />
		<Input type="password" id="passwordConfirm" label="Confirm Password" />
		<div class="mt-2">
			<button type="submit">Register</button>
		</div>
	</form>
</div>

