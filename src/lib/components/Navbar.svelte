<script lang="ts">
	import { Record } from 'pocketbase';
	export let data: { user: Record };
	import { navScroll } from '../utils';

	navScroll();
</script>

<div id="navbar" class=" flex h-16 w-full items-center justify-between fixed">
	<a href="/">
		<img alt="Logo" src="/logo.png" height="64" width="64" />
	</a>
	<div class="flex items-center">
		{#if data.user}
			<a class="mr-3" href="/profile">Profile</a>
			<form action="/auth/logout" method="POST" class="mr-4">
				<button type="submit">Log out</button>
			</form>
		{:else}
			<a href="/auth/login" class="mr-4">Login</a>
			<a href="/auth/register" class="mr-4">Register</a>
		{/if}
	</div>
</div>
