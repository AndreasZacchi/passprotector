<script lang="ts">
	import Password from '$lib/components/Password.svelte';
	export let passwords: [websiteID: string, website: string, password: string] | undefined;
	export let searchTerms = [''];
</script>

<!--TODO: after a certain amount of passwords, make it rendered by pages-->
<div class="py-2 rounded-md w-[100%] bg-white shadow-xl mb-4">
	{#if passwords}
		<table class="w-full">
			<thead>
				<tr>
					<th class="w-5/12 text-left pl-2">Websites</th>
					<th class="w-3/12" />
					<th class="w-4/12 text-left pr-2">Passwords</th>
				</tr>
			</thead>
			<tbody>
				{#each passwords as [websiteID, website, password]}
					{#each searchTerms as currentTerm}
						{#if website.includes(currentTerm)}
							<tr class="odd:bg-slate-200 even:bg-white w-[100%]">
								<Password id={websiteID} {website} {password} />
							</tr>
						{/if}
					{/each}
				{/each}
			</tbody>
		</table>
	{:else}
		<p>You dont have any passwords. Generate one to get started!</p>
	{/if}
</div>
