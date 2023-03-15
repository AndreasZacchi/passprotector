<script lang="ts">
	import { page } from '$app/stores';
	let currentPage = $page.url.pathname.split('/').pop();
</script>

<!--TODO: Text on links not vertically centered-->
<!--TODO: Make design follow over on new pages, det bookmark indent doesnt work, the color does nok work-->
<!--TODO: make menu follow screen when scrolling-->
<div class="bg-white h-[100vh] w-[12rem] shadow-x flex flex-col z-20 justify-between">
	<!--Logo div-->
	<div class="absolute top-0 flex flex-row items-center">
		<img src="../logo.png" alt="Logo" class="w-[8%] " />
		<p class="text-xl font-semibold">PassProtector</p>
	</div>

	<!--Buttons-->
	<div class="flex flex-col mt-[80%] font-semibold">
		{#if currentPage != undefined}
			<a
				href="./profile"
				class="{currentPage == 'profile'
					? 'bg-main-orange-300 w-[110%] -translate-x-[10%]'
					: 'transition-all hover:bg-main-orange-300 origin-left hover:translate-x-[0%]'} w-[110%] -translate-x-[10%] duration-200 text-left pl-8 h-10"
				>Profile</a
			>

			<a
				href="./passwords"
				class="{currentPage == 'passwords'
					? 'bg-main-orange-300 w-[110%] translate-x-[0%] pl-8'
					: 'transition-all hover:bg-main-orange-300 origin-left hover:translate-x-[0%]'} w-[110%] -translate-x-[10%] duration-200 text-left pl-8 h-10"
				>Passwords</a
			>
			<a
				href="statistics"
				class="{currentPage == 'statistics'
					? 'bg-main-orange-300 w-[110%] -translate-x-[10%]'
					: 'transition-all hover:bg-main-orange-300 origin-left hover:translate-x-[0%]'} w-[110%] -translate-x-[10%] duration-200 text-left pl-8 h-10"
				>Statistics</a
			>
			<a
				href="activity"
				class="{currentPage == 'activity'
					? 'bg-main-orange-300 w-[110%] -translate-x-[10%]'
					: 'transition-all hover:bg-main-orange-300 origin-left hover:translate-x-[0%]'} w-[110%] -translate-x-[10%] duration-200 text-left pl-8 h-10"
				>Activity</a
			>
		{/if}
	</div>

	<!--Logout div-->
	<div class="flex flex-row w-[100%] items-center">
		<button class="hover:bg-red-500 duration-150 h-14 font-semibold text-center w-full">
			<i class="fa-solid fa-right-from-bracket text-md" />
			Log Out</button
		>
	</div>
</div>
