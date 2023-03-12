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
  
    let direction: string;
    let currentIndex = 1;
    $: let slide = "" + direction; 
  
    async function next() {
      currentIndex = (currentIndex + 1) % images.length;
      
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
    }

    .carousel-card.right {
      transform: translateX(-10rem);
      transition: transform 2s linear;
    }
    
    .carousel-card.left {
      transform: translateX(10rem);
      transition: transform 2s linear;
    }

    
  </style>
  
  <div class="grid place-items-center gap-6 justify-center items-center py-10">
    
    <div class=" col-span-3 ">
      <i on:click={previous} class=" px-36 fa-solid fa-arrow-left text-3xl hover:text-main-300 cursor-pointer transition ease-linear"></i>
      <i on:click={next} class=" px-36 fa-solid fa-arrow-right text-3xl hover:text-main-300 cursor-pointer transition ease-linear"></i>
    </div>
    
  
    {#each images as image, i}
      <div 
        class={` row-start-2 carousel-card flex flex-col h-[22rem] w-[25rem] rounded-2xl shadow-xl ${i == currentIndex ? "active" : ""} ${direction}`}
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
  
  </div>
  