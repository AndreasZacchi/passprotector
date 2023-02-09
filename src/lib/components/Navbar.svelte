<script lang ts>
	export let loggedIn = false;
</script>

<div class="bg-slate-600 flex h-16 items-center justify-between text-white">
	<a href="/">
		<img alt="Logo" src="/logo.png" height="64" width="64" />
	</a>
	<div class="flex items-center">
		{#if loggedIn}
			<a class="w-10 h-10 bg-main-200 rounded-full mr-4" href="/profile" />
			<form action="/auth/logout" method="POST" class="mr-4">
				<button type="submit">Log out</button>
			</form>
		{:else}
			<a href="/auth/login" class="mr-4">Login</a>
			<a href="/auth/register" class="mr-4">Register</a>
		{/if}
	</div>
</div>
