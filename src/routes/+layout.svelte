<script>
    import "../app.css";
    import { onMount } from 'svelte';

    let title = "Firebird Foundry";
    onMount(() => {
        title = (!document) ? "Firebird Foundry" : document.title;
    });
</script>

<div id="navBar" class="shadow-xl h-16 mt-4">   
    <div class="flex">
        <div class="w-1/12 m-auto">
            <a href="/">
                <img src="/favicon.png" alt="logo" class="h-12 m-auto" />
            </a> 
        </div>
        <div class="w-10/12 text-center">
            <h1 class="text-primary">{title}</h1>
        </div>
        <div class="w-1/12 m-auto">
            <img src="/favicon.png" alt="logo" class="h-12 m-auto" />
        </div>
    </div>
</div>
<div id="viewport" class="min-h-screen p-12 text-white">
    <slot />
</div>
