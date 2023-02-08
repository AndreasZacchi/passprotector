<script>
	import { BaseAuthStore } from 'pocketbase';
	import '../app.css';
	/**
	 * @type {{ user: BaseAuthStore; }}
	 */
	export let data;
</script>

{#if !data.user}
	<div>not logged in</div>
{:else}
	<div>logged in</div>
	<form action="/auth/logout" method="POST"><button type="submit">Log out</button></form>
{/if}
<slot />
