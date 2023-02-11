<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	export let data: { user: Record };
</script>

<form action="?/generatePassword" method="POST" class="bg-gray-500 py-2">
	<Input id="website" label="Website" />
	<div class="mt-2">
		<button type="submit">Generate new password</button>
	</div>
</form>

<ul>
	<li />
</ul>
