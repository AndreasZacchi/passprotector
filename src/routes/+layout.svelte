<script lang="ts">
	import { Record } from 'pocketbase';
	import '../app.css';
	export let data: { user: Record };
</script>

<slot />
