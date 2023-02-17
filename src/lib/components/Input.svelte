<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let type = 'text';
	export let label: string;
	export let disabled = false;
	export let required = false;
	export let error = '';
</script>

<div class="mt-2 flex flex-col">
	<label for={id}>
		<span class=" text-2xl">{label}</span>
	</label>

	<input
		class="border-b-[2px] border-black outline-none text-lg w-80
	focus:border-main-300 focus:border-b-[3px] focus:mb-[-1px] transition delay-75
	hover:border-gray-700 hover:border-b-[3px] hover:mb-[-1px]"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>

	<div class="my-1 h-4 text-sm text-red-500">
		{#if error}
			{error}
		{/if}
	</div>
</div>
