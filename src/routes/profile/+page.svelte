<script lang="ts">
	import { Record } from 'pocketbase';
	import Input from '$lib/components/Input.svelte';

	export let data: { user: Record };
</script>

<form action="?/updateProfile" method="POST" class="bg-gray-500 py-2">
	<Input type="email" id="email" label="Email" value={data.user.email} />
	<!-- <Input type="password" id="curPassword" label="Current Password" />
	<Input type="password" id="newPassword" label="New Password" />
	<Input type="password" id="newPasswordConfirm" label="Confirm New Password" /> -->
	<div class="mt-2">
		<button type="submit">Save Changes</button>
	</div>
</form>
