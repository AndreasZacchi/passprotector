<script lang="ts">
	import { fly } from 'svelte/transition';

	let images = [
		{
			name: 'Jeff Bezos',
			src: '/1.jpg',
			review: '"I use PassProtector to keep all of my important passwords!"'
		},
		{
			name: 'Mark Cuban',
			src: '/2.jpg',
			review: '"All the Maverick players use this password manager!"'
		},
		{
			name: 'Matty',
			src: '/3.jpg',
			review: '"Absolutely amazing. I use this password manager. thumbs up!"'
		}
	];

	let currentIndex = 0;

	async function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function previous() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="grid grid-col-3 place-items-center gap-6 justify-center items-center py-10">
	<i
		on:click={previous}
		class=" col-start-1 px-10 fa-solid fa-arrow-left text-3xl hover:text-main-300 cursor-pointer transition ease-linear"
	/>

	{#key images[currentIndex].src}
		<div
			class={' flex col-start-2 items-center carousel-card flex flex-row h-[22rem] w-[57rem] rounded-2xl shadow-xl'}
			in:fly={{ x: -200, y: 0, delay: 450, opacity: 0 }}
			out:fly={{ x: 200, y: 0 }}
		>
			<div class=" bg-main-orange-300 flex h-full items-center rounded-l-2xl">
				<img
					class="mt-2 border-[6px] border-main-orange-300 w-56 translate-x-20 h-56 rounded-[50%] object-cover"
					src={images[currentIndex].src}
					alt="hello"
				/>
			</div>

			<div class=" h-full px-4 pt-10 flex flex-col justify-center ml-28  ">
				<span class=" transition duration-300 ease-in text-center text-3xl"
					>{images[currentIndex].name}</span
				>
				<p class=" pt-2 text-center italic text-lg">{images[currentIndex].review}</p>
			</div>
		</div>
	{/key}

	<i
		on:click={next}
		class=" col-start-3 px-10 fa-solid fa-arrow-right text-3xl hover:text-main-300 cursor-pointer transition ease-linear"
	/>
</div>
