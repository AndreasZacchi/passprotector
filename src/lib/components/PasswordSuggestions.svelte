<script lang="ts">
	let suggestions: [suggestion: string, passwordID: string] | undefined;
</script>

<div
	class="bg-main-600 border-2 border-slate-300 rounded-2xl p-4 shadow-lg flex flex-col w-1/2 mr-1.5"
>
	<label for="suggestions" class="text-lg font-helvetica">Suggestions</label>
	<ul
		id="suggestions"
		class="bg-slate-200 hover:shadow-inner w-full rounded-lg px-2 py-1 h-full overflow-auto flex relative flex-col"
	>
		{#if suggestions != undefined}
			{#each suggestions as [suggestion, passwordIndex]}
				<li class="text-red-500">{suggestion}</li>
			{/each}
		{:else}
			<li>No suggestions at the moment</li>
		{/if}
	</ul>
</div>
