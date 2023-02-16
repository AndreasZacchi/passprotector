<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getPassword } from '$lib/utils';
	import { Record } from 'pocketbase';

	export let data: { user: Record; passwords: [website: string, password: string] | undefined };
</script>

<form action="?/generatePassword" method="POST" class="bg-gray-500 py-2">
	<Input id="website" label="Website" />
	<div class="mt-2">
		<button type="submit">Generate new password</button>
	</div>
</form>

{#if data.passwords !== undefined}
	<table>
		<thead>
			<tr>
				<th>Website</th>
				<th>Password</th>
			</tr>
		</thead>
		<tbody>
			{#each data.passwords as [website, password]}
				<tr>
					<td>{website}</td>
					<td>
						<button on:click={() => navigator.clipboard.writeText(password)}>Copy password</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>You dont have any passwords. Generate one to get started!</p>
{/if}
