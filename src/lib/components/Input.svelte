<script language="typescript">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let label: string;
	export let type = 'text';
	export let disabled = false;
	export let required = false;

	export let errors;
</script>

<div>
	<label for={id}>
		<span>{label}</span>
	</label>
	<input {type} {placeholder} {required} {disabled} {id} name={id} {value} />
	{#if errors}
		{#each errors as error}<label for={id}>{error}</label>{/each}
	{/if}
</div>
