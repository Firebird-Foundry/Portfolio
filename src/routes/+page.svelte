<script lang="ts">
    import type { PageServerData } from './$types';
    
    export let data: PageServerData;
</script>

<svelte:head>
    <title>Firebird Foundry</title>
</svelte:head>

<div class="grid grid-cols-4 gap-4">
    {#each data.CoverImages as coverImage}
        <div class="column">
            <h2 class="text-primary">{ coverImage.expandedProject.name}</h2>            
            <a href="/{ coverImage.expandedProject.name }"><img src={coverImage.fileUrl} alt={ coverImage.title }></a>
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