<script lang="ts">
    type image = {
        name: string
        src: string
        review: string
    }
    
    export let images: image[];
</script>

<ul>
    {#each images as { name, src, review }}
        <li>
            <span>{name}</span>
            <img  src={src} alt="hello" />
            <p>{review}</p>
        </li>
    {/each}
</ul>