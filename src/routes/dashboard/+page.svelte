<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getPassword, passwordStrength, averagePasswordStrength } from '$lib/utils';
	import { Record } from 'pocketbase';
	import { each } from 'svelte/internal';

	export let data: { user: Record; passwords: [website: string, password: string] | undefined };
		
	let avrPassStrength = averagePasswordStrength(data.passwords);

	function showNewPass() {
		var x = document.getElementById("newPassword");

  		if (x.style.display === "none") {
    		x.style.display = "block";
  		} 
		else {
    		x.style.display = "none";
 		}
	};
</script>


<!--Main div-->
<body class="flex justify-center border-2 border-green-400">

	
	<div id="newPassword" class="z-10 absolute border-2 border-green-400 flex justify-center">
		<h2>SUT PIK</h2>
	</div>
	
	
	<!--dinfar div-->
	<div class="grid grid-cols-2 m-2 gap-3 relative w-full">
	
	
		<!--Generate password-->
		<div class="border-2 border-slate-300 col-start-1 col-span-1 rounded-2xl px-4 shadow-lg">
			<div class="">
				<form action="?/generatePassword" method="POST" class=" py-2">
					<Input id="website" label="Website" bgcolor="bg-slate-200"/>
					<div class="">
						<button type="submit" class="bg-main-300 hover:bg-main-200 rounded-md px-2 py-1">Generate new password</button>
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
				<p class="text-red-700 text-2xl font-bold font-helvetica">0</p>
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
				<button on:click={() => showNewPass()} class="px-1 py-1.5 bg-main-100 rounded-tl-2xl rounded-md">New Password</button>
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
</body>


