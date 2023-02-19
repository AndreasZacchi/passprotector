<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { Record } from 'pocketbase';
	import '../app.css';
	export let data: { user: Record };

</script>

<Navbar {data} />
<slot />
