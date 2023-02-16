<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center">

	<!-- Register form -->
	<form action="?/register" method="POST" class=" shadow-2xl rounded-3xl py-2 w-fit p-20 pt-10 pb-10 text-3xl ">

		<!-- Logo div -->
		<div class="flex justify-center mb-4 h-24">
			<img src="/logo.png" alt="logo" class="object-cover w-20 ">
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class="text-4xl pb-4">Register</h1>
		</div>

		<!-- Inputs -->
		<Input type="email" label="Email"  id="email" />
		<Input type="password" label="Password"  id="password" />
		<Input type="password" label="Confirm Password"  id="passwordConfirm" />

		<!-- Button div -->
		<div class="mt-2 flex justify-center pt-3">
			<button type="submit" class=" bg-main-300  rounded-2xl w-8/12 p-3 pt-2 m-2 hover:bg-main-200">Register</button>
		</div>

	</form>

</div>

