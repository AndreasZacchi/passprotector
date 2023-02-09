<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>

<!-- Window div -->
<div class="flex justify-center h-[calc(100vh-4rem)] items-center" 
style="background-color: rgb(249, 115, 22); background-image: radial-gradient(at 0% 100%, rgb(220, 38, 38) 0, transparent 100%), radial-gradient(at 0% 0%, rgb(249, 115, 22) 0, transparent 100%), radial-gradient(at 100% 100%, rgb(253, 224, 71) 0, transparent 100%), radial-gradient(at 100% 0%, rgb(251, 146, 60) 0, transparent 100%);
">

	<!-- Register form -->
	<form action="?/register" method="POST" class="bg-white rounded-3xl py-2 w-fit p-6 pt-3 pb-4 p-10 text-3xl">

		<!-- Logo div -->
		<div class="flex justify-center">
			<img src="/logo.png" alt="logo" class="object-cover w-20">
		</div>

		<!-- Register text div -->
		<div class="flex justify-center">
			<h1 class="text-5xl pb-4">Register</h1>
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

