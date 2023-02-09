<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { BaseAuthStore } from 'pocketbase';
	import '../app.css';
	export let data: { user: BaseAuthStore };
</script>

<Navbar loggedIn={data.user ? true : false} />
<slot />
