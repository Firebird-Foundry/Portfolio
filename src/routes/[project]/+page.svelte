<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="w-3/4 m-auto">
    {#if !!data.HeadingImage}
        <img class="w-full" src={data.HeadingImage.fileUrl} alt={data.HeadingImage.title} />
    {/if}

    <p>
        {data.Project.blurb}
    </p>
    ---------------------------------------------------------
    <div class="grid grid-cols-4 gap-4">
        {#each data.BodyImages as image, i}
            {#if i % 2 == 0}
                <p class="col-span-1 m-auto">{image.description}</p>
                <img class="col-span-3" src={image.fileUrl} alt={image.title} />
            {:else}
                <img class="col-span-3" src={image.fileUrl} alt={image.title} />
                <p class="col-span-1 m-auto">{image.description}</p>
            {/if}
        {/each}
    </div>
    ------------------------------------
    <div class="flex mb-4">
        <div class="w-1/4">
            {#each data.Column1 as image}
                <img class="p-4" src={image.fileUrl} alt={image.title} />
            {/each}
        </div>
        <div class="w-1/4">
            {#each data.Column2 as image}
                <img class="p-4" src={image.fileUrl} alt={image.title} />
            {/each}
        </div>
        <div class="w-1/4">
            {#each data.Column3 as image}
                <img class="p-4" src={image.fileUrl} alt={image.title} />
            {/each}
        </div>
        <div class="w-1/4">
            {#each data.Column4 as image}
                <img class="p-4" src={image.fileUrl} alt={image.title} />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
 </style>
