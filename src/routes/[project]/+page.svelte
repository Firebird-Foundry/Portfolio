<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';

	function openImageModal(src: string, e: Event) {
		if (showModal) return;

		e.stopImmediatePropagation();
		previewImageSrc = src;
		showModal = true;
	}
	function closeModal() {
		showModal = false;
	}
	export let previewImageSrc: string;
	export let showModal: boolean;
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.Project.name}</title>
</svelte:head>

<div on:click={closeModal} on:keypress={closeModal}>
	<Modal images={data.Images} isOpen={showModal} src={previewImageSrc} />

	<div class="w-[97%] md:w-3/4  m-auto">
		{#if !!data.HeadingImage}
			<img class="w-full mb-8" src={data.HeadingImage.fileUrl} alt={data.HeadingImage.title} />
		{/if}

		<p class="text-center mb-16">
			{data.Project.blurb}
		</p>

		<div class="md:flex mb-6">
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesFirstThird as image}
					<img
						class="w-full rounded-3xl"
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						src={image.fileUrl}
						alt={image.title}
					/>
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesSecondThird as image}
					<img
						class="w-full rounded-3xl"
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						src={image.fileUrl}
						alt={image.title}
					/>
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesThirdThird as image}
					<img
						class="w-full rounded-3xl"
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						src={image.fileUrl}
						alt={image.title}
					/>
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
		</div>

		<div class="md:flex mb-4">
			<div class="md:w-1/4">
				{#each data.Column1 as image}
					<img
						class="p-4"
						src={image.fileUrl}
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						alt={image.title}
					/>
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column2 as image}
					<img
						class="p-4"
						src={image.fileUrl}
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						alt={image.title}
					/>
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column3 as image}
					<img
						class="p-4"
						src={image.fileUrl}
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						alt={image.title}
					/>
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column4 as image}
					<img
						class="p-4"
						src={image.fileUrl}
						on:click={(e) => openImageModal(image.fileUrl, e)}
						on:keypress={(e) => openImageModal(image.fileUrl, e)}
						alt={image.title}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
</style>
