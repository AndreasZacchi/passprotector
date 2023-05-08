<script lang="ts">
	import { Record } from 'pocketbase';
	export let data: { user: Record };
	import { navScroll } from '../utils';
	import { page } from '$app/stores';

	navScroll();
</script>

<!--div class="w-full flex justify-center h-16"-->
<div id="navbar" class=" flex h-16 w-full justify-around items-center fixed">
	{#if $page.url.pathname == '/auth/login' || $page.url.pathname == '/auth/register'}
		<span />
	{:else}
		<a class="flex content-center hover:opacity-[0.85] transition ease-linear delay-75" href="/">
			<img alt="Logo" src="/logo.png" height="64" width="64" />
			<span class=" m-auto inline-block text-2xl font-semibold">PassProtector</span>
		</a>
	{/if}
	<div class=" flex items-center">
		{#if data.user}
			<a class="mr-3" href="/profile">Profile</a>
			<form action="/auth/logout" method="POST" class="mr-4">
				<button type="submit">Log out</button>
			</form>
		{:else if $page.url.pathname == '/'}
			<a
				href="/auth/login"
				class=" font-semibold text-lg mx-2 hover:text-main-orange-400 rounded-xl py-1 px-2 transition ease-linear delay-75"
				>Log in</a
			>
			<a
				href="/auth/register"
				class=" border-2 border-main-orange-500 text-main-orange-500 hover:bg-main-orange-400 hover:border-main-orange-400 hover:text-blue-50 font-medium rounded-md text-lg mx-2 py-1 px-2 transition ease-linear delay-75"
				>Get PassProtector</a
			>
		{:else if $page.url.pathname == '/auth/login' || $page.url.pathname == '/auth/register'}
			<span />
		{/if}
	</div>
</div>
