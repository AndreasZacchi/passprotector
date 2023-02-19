<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getPassword } from '$lib/utils';
	import { Record } from 'pocketbase';

	export let data: { user: Record; passwords: [website: string, password: string] | undefined };
	
</script>

<div class="grid grid-cols-2 mx-2">


	<!--Generate password-->
	<div class="border-2 border-slate-200 col-start-1 col-span-1 rounded-2xl px-4 shadow-lg mr-1">
		
		<form action="?/generatePassword" method="POST" class=" py-2">
			<Input id="website" label="Website" bgcolor="bg-slate-200"/>
			<div class="mt-2">
				<button type="submit" class="bg-main-300 hover:bg-main-200 rounded-md px-2 py-1">Generate new password</button>
			</div>
		</form>
	</div>


	<!--Statistics-->
	<div class="border-2 border-slate-200 col-start-2 rounded-2xl shadow-lg ml-1 grid grid-cols-3 p-4">

		<!--Stored Paswords-->
		<div class="flex flex-col place-items-center">
			<h1 class="mb-5">Protected Passwords</h1>
			<p class="text-green-700 text-2xl font-bold font-helvetica">{data.passwords?.length}</p>
		</div>

		<!--Leaked Passwords-->
		<div class="flex flex-col place-items-center">
			<h1 class="mb-5">Leaked Passwords</h1>
			<p class="text-red-700 text-2xl font-bold font-helvetica">0</p>
		</div>
		
		<!--Average password strength-->
		<div class="flex flex-col place-items-center">
			<h1 class="mb-5">Average Password Strength</h1>
			<p class="text-green-700 text-2xl font-bold font-helvetica">GREAT</p>
		</div>
	</div>

	<!--Password list-->
	<div class="border-2 border-slate-200 row-start-2 col-span-2 mt-2 rounded-lg shadow-lg">
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
	</div>

</div>

