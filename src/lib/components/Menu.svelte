<script lang="ts">
	import { page } from '$app/stores';
	let currentPage = $page.url.pathname.split('/').pop();
</script>

<div class="bg-white h-[100vh] w-[12rem] shadow-x flex flex-col z-20">
	<!--Logo div-->
	<div class="absolute top-0 flex flex-row items-center">
		<img src="../logo.png" alt="Logo" class="w-[8%] " />
		<p class="text-xl font-semibold">PassProtector</p>
	</div>

	<!--TODO: Make more beautiful (better animations)-->
	<!--Buttons-->
	<div class="flex flex-col mt-[80%] font-semibold">
		{#if currentPage != undefined}
			<button
				class="{currentPage == 'profile'
					? 'bg-main-orange-300 w-[110%] '
					: 'hover:bg-main-orange-300 hover:w-[110%]'} duration-150 text-left pl-3 h-10"
				>Profile</button
			>

			<button
				class="{currentPage == 'passwords'
					? 'bg-main-orange-300 w-[110%] '
					: 'hover:bg-main-orange-300 hover:w-[110%]'} duration-150 text-left pl-3 h-10"
				>Passwords</button
			>
			<button
				class="{currentPage == 'statistics'
					? 'bg-main-orange-300 w-[110%] '
					: 'hover:bg-main-orange-300 hover:w-[110%]'} duration-150 text-left pl-3 h-10"
				>Statistics</button
			>
			<button
				class="{currentPage == 'activity'
					? 'bg-main-orange-300 w-[110%] '
					: 'hover:bg-main-orange-300 hover:w-[110%]'} duration-150 text-left pl-3 h-10"
				>Activity</button
			>
		{/if}
	</div>

	<!--Logout div-->
	<button class="hover:bg-red-500 duration-150 text-left pl-3 h-10 font-semibold">Log Out</button>
</div>
