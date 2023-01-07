<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';

	function getFileBase64FromUrl(url: string): Promise<string> {
		return fetch(url)
			.then((response) => response.blob())
			.then((blob) => {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onloadend = () => resolve(reader.result?.toString() ?? '');
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				});
			});
	}

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
			{#await getFileBase64FromUrl(data.HeadingImage.fileUrl) then base64}
				<img class="w-full mb-8" src={base64} alt={data.HeadingImage.title} />				
			{/await}
		{/if}

		<p class="text-center mb-16">
			{data.Project.blurb}
		</p>

		<div class="md:flex mb-6">
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesFirstThird as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
							class="w-full rounded-3xl"
							on:click={(e) => openImageModal(base64, e)}
							on:keypress={(e) => openImageModal(base64, e)}
							src={base64}
							alt={image.title}
						/>			
					{/await}
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesSecondThird as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
							class="w-full rounded-3xl"
							on:click={(e) => openImageModal(base64, e)}
							on:keypress={(e) => openImageModal(base64, e)}
							src={base64}
							alt={image.title}
						/>			
					{/await}
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
			<div class="w-full md:w-1/3 p-4">
				{#each data.BodyImagesThirdThird as image}
				{#await getFileBase64FromUrl(image.fileUrl) then base64}
				<img
					class="w-full rounded-3xl"
					on:click={(e) => openImageModal(base64, e)}
					on:keypress={(e) => openImageModal(base64, e)}
					src={base64}
					alt={image.title}
				/>			
			{/await}
					<p class="m-auto text-center mb-16 mt-8">{image.description}</p>
				{/each}
			</div>
		</div>

		<div class="md:flex mb-4">
			<div class="md:w-1/4">
				{#each data.Column1 as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
								class="p-4"
								src={base64}
								on:click={(e) => openImageModal(base64, e)}
								on:keypress={(e) => openImageModal(base64, e)}
								alt={image.title}
							/>	
					{/await}
					
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column2 as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
									class="p-4"
									src={base64}
									on:click={(e) => openImageModal(base64, e)}
									on:keypress={(e) => openImageModal(base64, e)}
									alt={image.title}
								/>	
					{/await}
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column3 as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
								class="p-4"
								src={base64}
								on:click={(e) => openImageModal(base64, e)}
								on:keypress={(e) => openImageModal(base64, e)}
								alt={image.title}
							/>	
					{/await}
				{/each}
			</div>
			<div class="md:w-1/4">
				{#each data.Column4 as image}
					{#await getFileBase64FromUrl(image.fileUrl) then base64}
						<img
								class="p-4"
								src={base64}
								on:click={(e) => openImageModal(base64, e)}
								on:keypress={(e) => openImageModal(base64, e)}
								alt={image.title}
							/>	
					{/await}
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
</style>
