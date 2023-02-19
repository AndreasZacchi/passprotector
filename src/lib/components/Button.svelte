<script lang="ts">
	export let destination: string | undefined = undefined;
	export let text = 'Button';
	export let textSize = 'text-base';
	export let textColor = 'text-white';
	export let boldness = 'font-normal';
	export let width = 'w-min';
	export let height = 'h-min';
</script>

{#if destination !== undefined}
	<a
		href={destination} 
		class="{textSize} {textColor} {boldness} {width} {height} bg-main-300 rounded-lg p-2 ease-in duration-150 hover:opacity-[0.85] "
	>
		{text}
	</a>
{:else}
	<button
		type="submit"
		class="{textSize} {textColor} {boldness} {width} {height}  bg-main-300 rounded-lg p-2 ease-in duration-150 hover:opacity-[0.85]"
		>{text}</button
	>
{/if}
