<script>
	import Input from '../../../lib/components/Input.svelte';
</script>

<form action="?/login" method="POST" class="bg-gray-500 py-2">
	<Input type="email" id="email" label="Email" />
	<Input type="password" id="password" label="password" />
	<div class="mt-2">
		<button type="submit">Login</button>
	</div>
</form>
