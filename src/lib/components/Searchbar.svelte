<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let bgcolor = 'bg-white';
	export let searchTerm = '';
	export let placeholder = 'Search';
	export let id: string;
</script>

<!--<input bind:value={searchTerm} {type} placeholder="Search" class="w-[100%]" />-->
<div class="{bgcolor} w-[100%] h-[2rem] flex flex-row items-center bg-white">
	<i class="fa-solid fa-magnifying-glass w-[2rem] rounded-l-md ml-2 " />

	<input
		class="outline-none text-lg w-[calc(100%)] rounded-r-md "
		bind:value={searchTerm}
		type="text"
		{placeholder}
		{id}
		name={id}
	/>
</div>
