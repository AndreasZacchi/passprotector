<script lang="ts">
    type image = {
        name: string
        src: string
        review: string
    }
    
    export let images: image[];
</script>

<ul class=" flex gap-6 justify-center items-center py-10">
    {#each images as { name, src, review }}
        <li class="flex flex-col h-96 w-80 directi rounded-2xl shadow-xl">
            <div class=" relative bg-main-300 flex justify-center h-[40%] rounded-t-2xl">
                <img class=" absolute border-[3px] border-main-300 w-48 h-48 rounded-[50%]" src={src} alt="hello"/>
            </div>
            <div class="pt-16 px-4 flex flex-col">
                <span class=" text-center text-xl">{name}</span>
                <p class=" pt-2 italic">{review}</p>
            </div>
            
        </li>
    {/each}
</ul>