<script lang="ts">
	import { each } from 'svelte/internal';
	import type { ArrayCardinality } from 'zod';
	import Carousel from '$lib/components/Carousel.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Record } from 'pocketbase';

	type Subscription = {
		name: string;
		price: number;
		included: Array<string>;
		missing: Array<string>;
		color: string;
	};

	type Review = {
		name: string;
		alias: string;
		citation: string;
	};

	// Free subscribtion model
	let free: Subscription = {
		name: 'Free',
		price: 0,
		included: ['Google autofill', '10 passwords'],
		missing: [
			'Unlimited passwords',
			'Family Sharing',
			'Password sharing',
			'Password leak detection'
		],
		color: 'bg-gray-50'
	};

	//Basis subscribtion model
	let basis: Subscription = {
		name: 'Basis',
		price: 10,
		included: ['Google autofill', '100 passwords', 'Family Sharing', 'Password sharing'],
		missing: ['Unlimited passwords', 'Password leak detection'],
		color: 'bg-slate-600'
	};

	//Premium subscribtion model
	let premium: Subscription = {
		name: 'Premium',
		price: 20,
		included: [
			'Google autofill',
			'Unlimited passwords',
			'Family Sharing',
			'Password sharing',
			'Password leak detection'
		],
		missing: ['Nothing'],
		color: 'bg-orange-400'
	};

	//MKBHD review
	let mkbhd: Review = {
		name: 'Marques Brownley',
		alias: 'MKBHD',
		citation:
			"If you're looking for a new password manager, I'd definitely give PassProtector a look."
	};

	//LTT review
	let ltt: Review = {
		name: 'Linus Sebastian',
		alias: 'LTT',
		citation: 'Very good very nice'
	};

	//WSJ review
	let wsj: Review = {
		name: 'Wall Street Journal',
		alias: 'WSJ',
		citation: 'No scam, very good'
	};

	let subscriptionModels: Array<Subscription> = [free, basis, premium];
	let reviews: Array<Review> = [mkbhd, ltt, wsj];

	export let data: { user: Record };
</script>

<Navbar {data} />
<!--Main Div-->
<div class="grid grid-cols-6 bg-white">
	<!--Left hero div, the div with text-->
	<div class="bg-blue-50 col-span-3 py-44 pl-[16.6vw] pr-6">
		<!--Header-->
		<h1 class="text-4xl font-helvetica text-main-300 mb-2">
			Take control of your online security with PassProtector!
		</h1>

		<!--Sales pitch-->
		<span class="text-xl">
			Unlock the power of online security with PassProtector! Say goodbye to endless password
			resets, account lockouts, and security headaches. Store all your passwords in one secure and
			convenient place and enjoy peace of mind with just one master password.
		</span>

		<!--list of features-->
		<ul class="my-10">
			<li class="flex flex-row">
				<img class="h-5" src="checkmark.png" alt="checkmark" />
				<h2 class="ml-2 mb-3 text-xl">Military grade encryption</h2>
			</li>
			<li class="flex flex-row">
				<img class="h-5" src="checkmark.png" alt="checkmark" />
				<h3 class="ml-2 mb-3 text-xl">Password Leak Detection</h3>
			</li>
			<li class="flex flex-row">
				<img class="h-5" src="checkmark.png" alt="checkmark" />
				<h4 class="ml-2 text-xl">Endnu en god ting ved vores passwordmanager</h4>
			</li>
		</ul>

		<!--Try for free button-->
		<a
			href="/auth/register"
			class="bg-main-300 rounded-lg p-2 font-poppins text-white ease-in duration-150 hover:bg-main-200 "
		>
			Try PassProtector for Free
		</a>
	</div>

	<!--right hero div, the div with a picture-->
	<div class="col-start-4 col-span-3 pr-[16.6vw] py-44 bg-blue-50 flex justify-center">
		<img src="PLACEHOLDER.png" alt="PassProtector example" />
	</div>

	<!--Reviews-->
	<div class="row-start-2 col-span-6 py-5 flex justify-evenly place-items-center px-14 shadow-y">
		<div class="flex flex-col border-green-500">
			{#each reviews as rev}
				<div class="flex flex-row text-main-300 font-bold">
					<h1 class="mr-2">{rev.name}</h1>
					<p class="flex justify-center">({rev.alias})</p>
				</div>
				<p class="italic">"{rev.citation}"</p>
			{/each}
		</div>

		<!--Trust pilot billede-->
		<img class="w-48 h-16 mr-4 object-center" src="trustpilot5stars.png" alt="Trustpilot rating" />

		<!--Amount of users-->
		<div class="flex flex-col place-items-center">
			<h1 class="font-bold text-3xl">4.3B+</h1>
			<span class="text-sm"> users worldwide </span>
		</div>
	</div>

	<!-- Carousel -->
	<div class=" row-start-3 col-span-6 ">
		<Carousel />
	</div>

	<!--Subscription models-->
	<div class="row-start-4 col-span-6 py-10 flex flex-col justify-center place-items-center">
		<h1 class="text-4xl font-helvetica text-main-300">PassProtector Plans</h1>

		<div class="flex flex-row mt-8">
			<!--Subscription model box builder-->
			{#each subscriptionModels as sub}
				<!--Subscription model box   style="background: linear-gradient(rgb(0, 91, 187) 50%, rgb(255, 213, 0) 50%);-->
				<a
					href="https://youtube.com"
					class="{sub.color} rounded-lg px-5 hover:px-6 mx-10 hover:mx-[2.25rem] my-2 hover:my-0 h-[30rem] hover:h-[30.5rem] w-80 hover:w-[20.5rem] shadow-y hover:shadow-yxl duration-300"
				>
					<h1 class="font-helvetica flex justify-center text-2xl mt-8 mb-4">{sub.name}</h1>

					<!--Plan Price-->
					<div class="">
						<span class="text-2xl italic font-medium flex justify-center">{sub.price} DKK</span>
						<p class="flex justify-center text-sm mb-4">Per month</p>
					</div>

					<!--Model included features list-->
					<h2 class="underline">Included</h2>
					{#each sub.included as feature}
						<p class="mb-1 italic">- {feature}</p>
					{/each}

					<!--Model missing features list-->
					<h3 class="mt-3 underline">Missing</h3>
					{#each sub.missing as feature}
						<p class="mb-1 italic">- {feature}</p>
					{/each}
				</a>
			{/each}
		</div>
	</div>

	<!--Military grade encryption-->
	<div
		class="row-start-5 col-start-2 col-span-4 bg-orange-50 border-b-2 border-gray-200 flex flex-row"
	>
		<!--Military grade encryption text-->
		<div class="py-44 px-20 w-1/2">
			<h1 class="font-helvetica font-semibold text-2xl">Military Grade Encryption</h1>
			<span>
				Protect your sensitive information with our password manager, featuring military grade
				encryption. Our advanced encryption algorithms provide the highest level of security,
				safeguarding your passwords, credit card details, and other personal data from unauthorized
				access. With our password manager, you can manage all your login credentials in one place,
				with the peace of mind that comes from using the ultimate level of protection for your
				sensitive information.
			</span>
		</div>

		<!--Military grade encryption Picture-->
		<div class="w-1/2 flex justify-center">
			<img src="logo.png" alt="Military Grade Encryption" />
		</div>
	</div>

	<!--Password Leak Detection-->
	<div class="row-start-6 col-start-2 col-span-4 border-b-2 border-gray-200 flex flex-row-reverse">
		<!--Password Leak Detection Text-->
		<div class="py-44 px-20 w-1/2">
			<h1 class="font-helvetica font-semibold text-2xl">Password Leak Detection</h1>
			<span>
				Protect your online security with our password manager. Our cutting-edge technology can
				detect password leaks and alert you to potential security threats, helping you to safeguard
				your sensitive information. With our password manager, you can rest assured that your
				passwords are secure and that you'll be alerted in case of any leaks.
			</span>
		</div>

		<!--Password Leak Detection Picture-->
		<div class="w-1/2 flex justify-center">
			<img src="logo.png" alt="Military Grade Encryption" />
		</div>
	</div>

	<!--Lorem Ipsum-->
	<div
		class="row-start-7 col-start-2 col-span-4 bg-orange-50 border-b-2 border-gray-200 flex flex-row"
	>
		<!--Lorem Ipsum Text-->
		<div class="py-44 px-20 w-1/2">
			<h1 class="font-helvetica font-semibold text-2xl">Lorem Ipsum</h1>
			<span>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</span>
		</div>

		<div class="w-1/2 flex justify-center">
			<img src="logo.png" alt="Military Grade Encryption" />
		</div>
	</div>
</div>
