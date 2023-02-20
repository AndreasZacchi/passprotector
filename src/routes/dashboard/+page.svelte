<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getPassword, passwordStrength, averagePasswordStrength, toggleDiv } from '$lib/utils';
	import { Record } from 'pocketbase';
	import { each } from 'svelte/internal';

	export let data: { user: Record; passwords: [website: string, password: string] | undefined };
		
	let avrPassStrength = averagePasswordStrength(data.passwords);

	let leakedPasswords: Array<string>;
</script>


<!--Main div-->
<div class="flex justify-center">

	<!--PopUp div-->
	<div id="newPassword" class="z-10 absolute hidden items-center justify-center h-[calc(100vh-4rem)] w-[100vw] bg-black bg-opacity-30">
	
		<!--Menu div-->
		<div class="h-[50vh] w-[50vw] bg-white rounded-md">

			<!--Control bar-->
			<div class="flex justify-start h-10 p-2 bg-slate-200">
				<button on:click={() => toggleDiv("newPassword", "flex")} class="px-4 bg-red-400 rounded-lg">Close</button>
			</div>

			<!--Type bar-->
			<div class="flex justify-start flex-col w-[10%] px-1.5 py-3 h-[calc(100%-2.5rem)] bg-main-100">
				<button class="bg-main-200 shadow-md mb-3 h-8">Account</button>
				<button class="bg-main-200 shadow-md mb-3 h-8">Credit card</button>
			</div>
		</div>
	</div>


	<!--Dashboard div-->
	<div class="grid grid-cols-2 m-2 gap-3 relative w-full">
	
	
		<!--Generate password-->
		<div class="border-2 border-slate-300 col-start-1 col-span-1 rounded-2xl px-2 shadow-lg">
			<div class="">
				<form action="?/generatePassword" method="POST" class=" py-2">
					<Input id="website" label="Website" bgcolor="bg-slate-200"/>
					<div class="">
						<button type="submit" class="bg-main-200 hover:bg-opacity-[0.85] rounded-lg px-2 py-1">Generate new password</button>
					</div>
				</form>
			</div>
	
		</div>
	
	
		<!--Statistics-->
		<div class="border-2 border-slate-300 col-start-2 rounded-2xl shadow-lg grid grid-cols-3 p-4">
	
			<!--Stored Paswords-->
			<div class="flex flex-col place-items-center">
				<h1 class="mb-5 font-helvetica text-lg">Protected Passwords</h1>
				<p class="text-green-700 text-2xl font-bold font-helvetica">
					{#if data.passwords == undefined} 
						0
					{:else}
						{data.passwords?.length}
					{/if}
				</p>
			</div>
	
			<!--Leaked Passwords-->
			<div class="flex flex-col place-items-center">
				<h1 class="mb-5 font-helvetica text-lg">Leaked Passwords</h1>
				{#if leakedPasswords == undefined} 
					<p class="text-green-700 text-2xl font-bold font-helvetica">0</p>
				{:else}
					<p class="text-red-700 text-2xl font-bold font-helvetica">{leakedPasswords.length}</p>
				{/if}
			</div>
			
			<!--Average password strength-->
			<div class="flex flex-col place-items-center">
				<h1 class="mb-5 font-helvetica text-lg">Average Password Strength</h1>
				{#if avrPassStrength == "great"}
					<p class="text-green-500 text-2xl font-bold font-helvetica">GREAT</p>
				{:else if avrPassStrength == "good"}
					<p class="text-green-700 text-2xl font-bold font-helvetica">Good</p>
				{:else if avrPassStrength == "bad"}
					<p class="text-red-800 text-2xl font-bold font-helvetica">Bad</p>
				{:else if avrPassStrength == "terrible"}
					<p class="text-red-500 text-2xl font-bold font-helvetica">Terrible</p>
				{:else}
					<p class="text-green-700 text-2xl font-bold font-helvetica">Generate To Get Started</p>
				{/if}
			</div>
		</div>
	
		<!--Password list-->
		<div class="border-2 border-slate-300 row-start-2 col-span-2 rounded-2xl shadow-lg">
	
			<!--Control panel div-->
			<div class="p-2 border-b-[1px] border-slate-200">
				<button on:click={() => toggleDiv("newPassword", "flex")} class="px-1 py-0.5 w-36 bg-main-200 hover:bg-opacity-[0.85] rounded-lg">New Password</button>
				<button on:click={() => toggleDiv("newPassword", "flex")} class="px-1 py-0.5 w-36 bg-blue-400 hover:bg-opacity-[0.85] rounded-lg">Change Password</button>
			</div>
	
			<div class="p-2 rounded-b-2xl">
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
	</div>
</div>


