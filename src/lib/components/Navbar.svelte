<script lang="ts">
	import { Record } from 'pocketbase';
	export let data: { user: Record };
	import { navScroll } from '../utils';

	navScroll();
</script>

<div id="navbar" class=" flex h-16 w-full items-center justify-between fixed px-4 ">
	<a class="flex content-center hover:opacity-[0.85] transition ease-linear delay-75" href="/">
		<img alt="Logo" src="/logo.png" height="64" width="64" />
		<span class=" m-auto inline-block text-xl font-semibold">Passprotector</span>
	</a>
	<div class="flex items-center">
		{#if data.user}
			<a class="mr-3" href="/profile">Profile</a>
			<form action="/auth/logout" method="POST" class="mr-4">
				<button type="submit">Log out</button>
			</form>
		{:else}
			<a href="/auth/login" class=" text-lg mx-3 hover:text-main-300 rounded-xl py-1 px-2 transition ease-linear delay-75">Login</a>
			<a href="/auth/register" class=" text-lg mx-3 hover:text-main-300 rounded-xl py-1 px-2 transition ease-linear delay-75">Register</a>
		{/if}
	</div>
</div>
