<script lang="ts">
	import type { Image } from '$lib/image';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	// provided by <Modals />

	function previousImage(e: Event) {
		e.stopImmediatePropagation();
		prevImageVisible = false;
		setTimeout(() => {
			prevImageVisible = true;
		}, 300);
		const index = images.findIndex((image) => image.id === imageId);
		if (index === 0) {
			imageId = images[images.length - 1].id;
		} else {
			imageId = images[index - 1].id;
		}
	}

	function nextImage(e: Event) {
		e.stopImmediatePropagation();
		nextImageVisible = false;
		setTimeout(() => {
			nextImageVisible = true;
		}, 300);
		const index = images.findIndex((image) => image.id === imageId);

		if (index === images.length - 1) {
			imageId = images[0].id;
		} else {
			imageId = images[index + 1].id;
		}
	}

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				isOpen = false;
			}
			if (e.key === 'ArrowLeft') {
				previousImage(e);
			}
			if (e.key === 'ArrowRight') {
				nextImage(e);
			}
		});
	});

	export let isOpen: boolean;
	export let imageId: string;
	export let images: Image[];
	export let prevImageVisible: boolean = true;
	export let nextImageVisible: boolean = true;

	$: imageBase64 = images.find((image) => image.id === imageId)?.fileBase64;
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div
			id="previousImage"
			on:click={previousImage}
			on:keypress={previousImage}
			class="absolute left-0 top-0 bottom-0 w-[10vw] bg-white cursor-pointer invisible md:visible"
		>
			{#if prevImageVisible}
				<Icon
					icon="line-md:chevron-left"
					class="w-28 flex h-screen text-quinary m-auto align-middle"
				/>
			{/if}
		</div>
		<div class="contents">
			<img
				src={imageBase64}
				class="max-w-[80vw] max-h-[90vh]"
				alt="Preview"
				on:click={(e) => e.stopImmediatePropagation()}
				on:keypress={(e) => e.stopImmediatePropagation()}
			/>
		</div>
		<div
			id="nextImage"
			on:click={nextImage}
			on:keypress={nextImage}
			class="absolute right-0 top-0 bottom-0 w-[10vw] bg-white cursor-pointer invisible md:visible"
		>
			{#if nextImageVisible}
				<Icon
					icon="line-md:chevron-right"
					class="w-28 flex h-screen text-quinary m-auto align-middle"
				/>
			{/if}
		</div>
	</div>
{/if}

<style>
	#previousImage,
	#nextImage {
		pointer-events: all;
		background: rgba(0, 0, 0, 0.25);
	}
	#previousImage:hover,
	#nextImage:hover {
		background: rgba(0, 0, 0, 0.5);
	}

	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.75);
	}

	.contents {
		min-width: 240px;
		border-radius: 6px;
		padding: 16px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
