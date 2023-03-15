<script lang="ts">
	export let activeDeletePassDiv: boolean;
	export let id: string;
</script>

<div id="newPassword" class:activeDeletePassDiv={activeDeletePassDiv === true} class="hidden pl-2">
	<form action="?/deletePassword" method="POST">
		<input class="hidden" type="text" id="website" name="website" value={id} />
		<p>Are you sure you want to delete this password?</p>
		<button type="button" on:click={() => (activeDeletePassDiv = false)}>Cancel</button>
		<button type="submit" class="text-red-500 hover:bg-opacity-[85%] ml-2 p-1">Delete</button>
	</form>
</div>

<style>
	.activeDeletePassDiv {
		display: flex;
	}
</style>
