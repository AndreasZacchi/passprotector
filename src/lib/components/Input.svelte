<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let label: string;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
</script>

<div class="mt-2">
	<label for={id}>
		<span>{label}</span>
	</label>
	<input {type} {placeholder} {required} {disabled} {id} name={id} {value} />
</div>
