<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let error = "Something went wrong";
</script>

<div class="mt-2">
	<input {type} {placeholder} {required} {disabled} {id} name={id} {value} />
	<div>
		{#if error}
		<span>{error}</span>
		{/if}
	</div>
	
</div>
