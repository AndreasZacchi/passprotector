<script lang="ts">
	import Password from '$lib/components/Password.svelte';
	export let passwords: [websiteID: string, website: string, password: string] | undefined;
</script>

<div class="p-2 rounded-b-2xl">
	{#if passwords}
		<table class="w-full">
			<thead>
				<tr>
					<th class="w-5/12 text-left">Websites</th>
					<th class="w-3/12" />
					<th class="w-4/12 text-left">Passwords</th>
				</tr>
			</thead>
			<tbody>
				{#each passwords as [websiteID, website, password]}
					<Password id={websiteID} {website} {password} />
				{/each}
			</tbody>
		</table>
	{:else}
		<p>You dont have any passwords. Generate one to get started!</p>
	{/if}
</div>
