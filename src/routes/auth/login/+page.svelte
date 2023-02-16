<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center">

	<!-- Register form -->
	<form action="?/register" method="POST" class=" shadow-2xl rounded-3xl py-2 w-fit p-16 pt-5 pb-5 text-3xl ">

		<!-- Logo div -->
		<div class="flex justify-center h-24 ">
			<img src="/logo.png" alt="logo" class="object-cover w-20 pb-1">
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class=" text-4xl pb-1">Login</h1>
		</div>

		<!-- Inputs -->
		<Input type="email" label="Email"  id="email" />
		<Input type="password" label="Password"  id="password" />

		<!-- Button div -->
		<div class="mt-2 flex justify-center pt-3">
			<button type="submit" class=" bg-main-300 rounded-2xl w-10/12 p-3 pt-2 m-2 hover:opacity-90">Login</button>
		</div>

	</form>

</div>

