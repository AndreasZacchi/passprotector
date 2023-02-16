<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let type = 'text';
	export let label: string;
	export let disabled = false;
	export let required = false;
	export let error = "Something went wrong";
</script>

<div class="mt-2 flex flex-col">

	<label class="" for="{id}">
		<span class=" text-2xl">{label}</span>
	</label>

	<input class="border-b-2 border-black outline-none p-1 text-lg w-80" 
	{type} {placeholder} {required} {disabled} {id} name={id} {value} />

	<div class="mb-2">
		{#if error}
		<span class="text-sm text-red-500">{error}</span>
		{/if}
	</div>
	
</div>
