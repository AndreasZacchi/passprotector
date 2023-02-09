<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center">

	<!-- Register form -->
	<form action="?/register" method="POST" class="bg-main-200 rounded-3xl py-2 w-fit p-6 pt-3 pb-4 p-10 text-xl">

		<!-- Logo div -->
		<div class="flex justify-center">
			<img src="/logo.png" alt="logo" class="object-cover h-21 w-20">
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class="text-4xl pb-4 text-white">Register</h1>
		</div>

		<!-- Inputs -->
		<Input type="email" placeholder="Email" id="email" />
		<Input type="password" placeholder="Password" id="password" />
		<Input type="password" placeholder="Confirm Password" id="passwordConfirm" />

		<!-- Button div -->
		<div class="mt-2 flex justify-center pt-3">
			<button type="submit" class="bg-main-200 rounded-full p-3 pt-2">Register</button>
		</div>

	</form>

</div>

