<script lang="ts">
	import type { PageData } from './$types';
	import type { Image } from '$lib/image';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';

	function openImageModal(id: string, e: Event) {
		if (showModal) return;

		e.stopImmediatePropagation();
		previewImageId = id;
		showModal = true;
	}
	function closeModal() {
		showModal = false;
	}
	function randomSide() {
		return Math.random() > 0.5 ? 'left' : 'right';
	}

	export let previewImageId: string;
	export let showModal: boolean;
	export let data: PageData;

	$: GalleryImages = data.Images.filter((x: Image) => !x.description);
	$: BodyImages = data.Images.filter((x: Image) => !!x.description);
	$: BodyImageColumns = [
		BodyImages?.filter((x: Image, i: number) => i % 3 == 0),
		BodyImages?.filter((x: Image, i: number) => i % 3 == 1),
		BodyImages.filter((x: Image, i: number) => i % 3 == 2)
	];
	$: GalleryColumns = [
		GalleryImages?.filter((x: Image, i: number) => i % 4 == 0),
		GalleryImages?.filter((x: Image, i: number) => i % 4 == 1),
		GalleryImages?.filter((x: Image, i: number) => i % 4 == 2),
		GalleryImages?.filter((x: Image, i: number) => i % 4 == 3)
	];

	onMount(() => {
		scroll(0, 0);
			const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
					}
					else {
						entry.target.classList.remove('show');
					}
				});
			},
			{
				rootMargin: '0px 0px -100px 0px'
			}
		);

		const hiddenElements = document.querySelectorAll('.animatable');
		hiddenElements.forEach((element) => {
			observer.observe(element);
		});
	});

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>{data.Project.name}</title>
</svelte:head>

<div on:click={closeModal} on:keypress={closeModal}>
	<Modal images={data.Images} isOpen={showModal} imageId={previewImageId} />

	<div class="w-[97%] md:w-3/4  m-auto">
		{#if !!data.HeadingImage}
			<img class="w-full mb-8 rounded-3xl" src={data.HeadingImage.fileBase64} alt={data.HeadingImage.title} />
		{/if}

		<p class="text-center mb-16">
			{data.Project.blurb}
		</p>
		<div class="md:flex mb-6 pt-4">
			{#each BodyImageColumns as column, columnIndex}
				<div class="w-full md:w-1/3 p-4 pt-0 overflow-hidden">
					{#each column as image}
					<div class="animatable 	{ 	innerWidth < 768 ? randomSide() : 
						  						columnIndex == 0 ? "left" : 
												columnIndex == 2 ? "right" : ""}">
						<img
							class="w-full rounded-3xl"
							on:click={(e) => openImageModal(image.id, e)}
							on:keypress={(e) => openImageModal(image.id, e)}
							src={image.fileBase64}
							alt={image.title}
						/>
						<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
					</div>
					{/each}
				</div>
			{/each}
		</div>


		<div class="md:flex mb-4">
			{#each GalleryColumns as column}
			<div class="md:w-1/4">
					{#each column as image}
					<img
						class="p-4"
						src={image.fileBase64}
						on:click={(e) => openImageModal(image.id, e)}
						on:keypress={(e) => openImageModal(image.id, e)}
						alt={image.title}
					/>
					{/each}
				</div>
			{/each}
			
		</div>
	</div>
</div>
<span class="show hidden"></span>
<style lang="scss">
	.animatable {
		opacity: 0;
			transition: all 1.5s;
	}

	.left {
			transform: translateX(-100%);
			filter: blur(5px);
		}
		.right {
			transform: translateX(100%);
			filter: blur(5px);
		}

	.show {
		opacity: 1;
		transform: translateX(0);
		transition: all 1s;
		filter: blur(0);
	}
</style>
