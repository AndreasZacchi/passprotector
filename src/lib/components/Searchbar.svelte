<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let bgcolor = 'bg-white';
	export let searchTerm = '';
	export let placeholder = 'Search';
	export let id: string;
</script>

<!--<input bind:value={searchTerm} {type} placeholder="Search" class="w-[100%]" />-->
<div class="{bgcolor} w-[100%] h-[4rem] border-[1px] rounded-md border-main-gray-200 flex flex-row">
	<button>
		<i class="fa-solid fa-magnifying-glass w-[2rem] rounded-l-md" />
	</button>

	<input
		class="outline-none text-lg w-[calc(100%)] rounded-r-md"
		bind:value={searchTerm}
		type="text"
		{placeholder}
		{id}
		name={id}
	/>
</div>
