<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="grid grid-cols-4 gap-4">
    {#each data.CoverImages as coverImage}
        <div class="column">
            <h2 class="text-slate-400">{ coverImage.expandedProject.name}</h2>

            <img src={coverImage.fileUrl} alt={ coverImage.title }>
        </div>
    {/each}
</div>

<style lang="scss">
   .column {
       display: flex;
       flex-direction: column;
       align-items: center;
       max-width: 12rem;
   }
</style>