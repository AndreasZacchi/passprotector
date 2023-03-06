<script lang="ts">
	import { transition_out } from "svelte/internal";
  import { slide } from "svelte/transition";


    let images = [
      {
        name: "Jeff Bezos",
        src: "/22.jpg",
        review: '"I use PassProtector to keep all of my important passwords!"',
      },
      {
        name: "Mark Cuban",
        src: "/22.jpg",
        review: '"All the Maverick players use this password manager!"',
      },
      {
        name: "Matty",
        src: "/22.jpg",
        review: '"Absolutely amazing. I use this password manager to keep my password for my child porno!"',
      },
    ];
  
    let currentIndex = 1;
  
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
      const card = document.getElementsByClassName("carousel-card")
      card.set.active
    }
  
    function previous() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

  </script>
  
  <style>

    .carousel-card {
      opacity: 0.5;
    }
  
    .carousel-card.active {
      opacity: 1;
      transform: translateX(-10rem);
      transition: transform 2s linear;
    }

    
  </style>
  
  <div class="flex gap-6 justify-center items-center py-10">
    <i on:click={previous} class=" fa-solid fa-arrow-left text-3xl hover:text-main-300 cursor-pointer transition ease-linear"></i>
  
    {#each images as image, i}
      <div id="card"
        class={` carousel-card flex flex-col h-[22rem] w-[25rem] rounded-2xl shadow-xl`}
      >
        <div class=" bg-main-300 flex justify-center h-[40%] rounded-t-2xl">
          <img class="mt-2 border-[6px] border-main-300 w-48 h-48 rounded-[50%] object-cover" src={image.src} alt="hello" />
        </div>
  
        <div class=" h-full justify-center px-4 pt-10 flex flex-col">
          <span class=" text-center text-xl">{image.name}</span>
          <p class=" pt-2 text-center italic">{image.review}</p>
        </div>
      </div>
    {/each}
  
    <i on:click={next} class="fa-solid fa-arrow-right text-3xl hover:text-main-300 cursor-pointer transition ease-linear"></i>
  </div>
  