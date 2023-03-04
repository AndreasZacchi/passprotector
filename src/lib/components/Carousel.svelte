<script lang="ts">

    let Images = [
        {
        name: "Jeff Bezos", 
        src: "/22.jpg", 
        review: '"I use PassProtector to keep all of my important passwords!"'
        },

        {
        name: "Mark Cuban", 
        src: "/22.jpg", 
        review: '"All the maverick players use this password manager!"'
        },

        { 
        name: "Matty", 
        src: "/22.jpg", 
        review: '"Absolutely amazing. I use this password manager to keep my password for my thosaunds of child porno on my pc!"'
        }
    ]

</script>

<ul class=" flex gap-6 justify-center items-center py-10">
    {#each Images as { name, src, review }}
        <li class="flex flex-col h-96 w-80 directi rounded-2xl shadow-xl">
            
            <div class=" bg-main-300 flex justify-center h-[40%] rounded-t-2xl">
                <img class=" mt-2 border-[6px] border-main-300 w-48 h-48 rounded-[50%]" src={src} alt="hello"/>
            </div>

            <div class=" h-full justify-center px-4 flex flex-col">
                <span class=" text-center text-xl">{name}</span>
                <p class=" pt-2 italic">{review}</p>
            </div>
            
        </li>
    {/each}
</ul>