<script lang="ts">
	import ConfirmDeletePassword from './ConfirmDeletePassword.svelte';

	export let id: string;
	export let website: string;
	export let password: string;

	let showPassword = false;
	let clipboardHover = false;
	let activeDeletePassDiv = false;
</script>

<td>
	<a class="pl-2 hover:underline hover:text-blue-600" href="https://www.{website}">{website}</a
	><ConfirmDeletePassword bind:activeDeletePassDiv {id} /></td
>

<!--Buttons that affect current password-->
<td class="flex justify-end pr-5">
	<!--Trashcan-->
	<div class="">
		<button
			on:click={() => (activeDeletePassDiv = !activeDeletePassDiv)}
			type="submit"
			class="w-full hover:bg-opacity-[85%]"
			><i class="fa-regular fa-trash-can text-lg text-red-600" /></button
		>
	</div>

	<!--Eye-->
	<button on:click={() => (showPassword = !showPassword)}>
		{#if showPassword}
			<i class="fa-solid fa-eye-slash text-lg mx-[6.88px]" />
		{:else}
			<i class="fa-solid fa-eye text-lg mx-2" />
		{/if}
	</button>

	<!--Change password-->
	<form action="?/editPassword" method="POST">
		<input class="hidden" type="text" id="websiteID" name="websiteID" value={id} />
		<input class="hidden" type="text" id="website" name="website" value={website} />
		<input class="hidden" type="text" id="newPassword" name="newPassword" value="NewPasswordHere" />
		<button type="submit">
			<i class="fa-solid fa-arrows-rotate text-lg text-blue-500 hover:rotate-45 duration-300" />
		</button>
	</form>

	<!--Copy password-->
	<button
		on:click={() => navigator.clipboard.writeText(password)}
		on:mouseover={() => (clipboardHover = true)}
		on:mouseleave={() => (clipboardHover = false)}
		on:focus={() => (clipboardHover = false)}
		class="text-lg ml-2"
	>
		{#if clipboardHover}
			<i class="fa-solid fa-clipboard-list" />
		{:else}
			<i class="fa-regular fa-clipboard" />
		{/if}
	</button>
</td>

<!--Determines whether to show password or not-->
<!-- TODO: Fix stars moving -->
{#if showPassword}
	<td
		><button on:click={() => navigator.clipboard.writeText(password)} class="pr-2 hover:underline"
			>{password}</button
		></td
	>
{:else}
	<td class="pr-2">********</td>
{/if}
