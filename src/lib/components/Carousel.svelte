<script lang="ts">
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
    //const card = document.getElementById("card")
  
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
     
      /* if (card) {
        card.style.animationName = "nextCard"
        card.style.animationDuration = "2s"
      } */
      
    }
  
    function previous() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

  </script>
  
  <style>
    @keyframes nextCard {
        from { transform: translateX(5rem) }
    }

    .carousel-card {
      opacity: 0.5;
      animation-name: nextCard;
      animation-duration: 2s;
    }
  
    .carousel-card.active {
      opacity: 1;
      
    }

    
  </style>
  
  <div class="flex gap-6 justify-center items-center py-10">
    <i on:click={previous} class=" fa-solid fa-arrow-left text-3xl hover:text-main-300 cursor-pointer transition ease-linear"></i>
  
    {#each images as image, i}
      <div id="card"
        class={` carousel-card flex flex-col h-[22rem] w-[25rem] rounded-2xl shadow-xl ${i == currentIndex ? 'active' : ''}`}
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
  