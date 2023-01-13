<script lang="ts">
	import type { Image } from '$lib/image';
	import Icon from '@iconify/svelte';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import { ffLoading, title } from '$lib/stores';

	export let data: PageServerData;

	let observer: ResizeObserver;
	let callbacks: WeakMap<Element, (element: Element) => any>;

	export function resizeObserver(element: Element, onResize: (element: Element) => any) {
	if (!observer) {
		callbacks = new WeakMap();
		observer = new ResizeObserver(entries => {
			for (const entry of entries) {
				const onResize = callbacks.get(entry.target);
				if (onResize) onResize(entry.target);
			}
		});
	}

   callbacks.set(element, onResize);
   observer.observe(element);

   return {
      destroy: () => {
         callbacks.delete(element);
         observer.unobserve(element);
      },
   };
}

	$: Columns = [
		data.CoverImages.filter((x: Image, i: number) => i % 4 == 0),
		data.CoverImages.filter((x: Image, i: number) => i % 4 == 1),
		data.CoverImages.filter((x: Image, i: number) => i % 4 == 2),
		data.CoverImages.filter((x: Image, i: number) => i % 4 == 3)
	];

	onMount(() => {
		title.set('Firebird Foundry');
		ffLoading.set(false);
	});
</script>

<svelte:head>
	<title>Firebird Foundry</title>
</svelte:head>

<div class="w-[97%] md:w-3/4  m-auto">
	<p class="text-center mb-12">
		{data.Intro}
	</p>

	<div class="lg:flex mb-4 overflow-hidden">
		{#each Columns as column}
			<div class="lg:w-1/4">
				{#each column as coverImage}
					<div class="box m-2 rounded-3xl ">
						<div
							class="tether"
							id={'image-' + coverImage.id}
							use:resizeObserver={element => {
								coverImage.clientHeight = element.clientHeight;
								coverImage.clientWidth = element.clientWidth;
							}}
						>
							<img class="rounded-3xl" src={coverImage.fileBase64} alt={coverImage.title} />
						</div>
						<div
							class="tethered"
							style="height: {coverImage.clientHeight}px; width: {coverImage.clientWidth}px"
						>
							<a href="/{coverImage.expandedProject.name}" on:click={() => ffLoading.set(true)}>
								<div
									class="rounded-3xl bg-secondary h-full p-[7%] pr-[15%] flex"
									id={'description-' + coverImage.id}
								>
									<div class="w-11/12">
										<h1
											class="mb-1 xl:mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-xl xl:text-4xl"
										>
											{coverImage.expandedProject.name}
										</h1>
										<p class="text-tertiary text-base md:text-xl lg:text-sm xl:text-xl">
											{coverImage.expandedProject.description}
										</p>
									</div>
									<div class="w-1/12 m-auto">
										<Icon icon="bi:chevron-compact-right" class="h-12 w-12 text-tertiary" />
									</div>
								</div>
							</a>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.tethered {
		position: absolute;
		left: -100%;
		top: 0;
	}

	.box {
		position: relative;
		overflow: hidden;
		float: left;
	}

	.box:hover .tethered {
		bottom: 0;
		-webkit-transition: all 0.4s, -webkit-transform 0.4s;
		transition: all 1s, transform 1s;
		width: 100%;
		opacity: 1;
		left: 0;
	}
</style>
