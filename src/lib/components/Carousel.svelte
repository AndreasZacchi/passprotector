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
        <img {name} {src} {review} alt="hello" />
    </li>
    {/each}
    
</ul>