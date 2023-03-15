<script>
	import Menu from '$lib/components/Menu.svelte';
</script>

<div class="flex flex-row">
	<Menu />
	<div class="ml-[12rem] overflow-x-hidden"><slot /></div>
</div>
