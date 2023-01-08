<script lang="ts">
	import type { Image } from '$lib/image';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: Column1 = data.CoverImages.filter((x: Image, i: number) => i % 4 == 0);
	$: Column2 = data.CoverImages.filter((x: Image, i: number) => i % 4 == 1);
	$: Column3 = data.CoverImages.filter((x: Image, i: number) => i % 4 == 2);
	$: Column4 = data.CoverImages.filter((x: Image, i: number) => i % 4 == 3);
</script>

<svelte:head>
	<title>Firebird Foundry</title>
</svelte:head>

<div class="w-[97%] md:w-3/4  m-auto">
	<p class="text-center mb-12">
		{data.Intro}
	</p>

	<div class="md:flex mb-4">
		<div class="md:w-1/4">
			{#each Column1 as coverImage}
				<a href="/{coverImage.expandedProject.name}">
					<div class="box m-4 rounded-3xl ">
						<div
							class="tether"
							id={'image-' + coverImage.id}
							bind:clientHeight={coverImage.clientHeight}
							bind:clientWidth={coverImage.clientWidth}
						>
							<img class="rounded-3xl" src={coverImage.fileBase64} alt={coverImage.title} />
						</div>
						<div
							class="tethered"
							style="height: {coverImage.clientHeight}px; width: {coverImage.clientWidth}px"
						>
							<div class="rounded-3xl bg-secondary h-full p-16" id={'description-' + coverImage.id}>
								<h1 class="mb-4">{coverImage.expandedProject.name}</h1>
								<p class="text-tertiary">{coverImage.expandedProject.description}</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<div class="md:w-1/4">
			{#each Column2 as coverImage}
				<a href="/{coverImage.expandedProject.name}">
					<div class="box">
						<div class="box m-4 rounded-3xl ">
							<div
								class="tether"
								id={'image-' + coverImage.id}
								bind:clientHeight={coverImage.clientHeight}
								bind:clientWidth={coverImage.clientWidth}
							>
								<img class="rounded-3xl" src={coverImage.fileBase64} alt={coverImage.title} />
							</div>
							<div
								class="tethered"
								style="height: {coverImage.clientHeight}px; width: {coverImage.clientWidth}px"
							>
								<div
									class="rounded-3xl bg-secondary h-full p-16"
									id={'description-' + coverImage.id}
								>
									<h1 class="mb-4">{coverImage.expandedProject.name}</h1>
									<p class="text-tertiary">{coverImage.expandedProject.description}</p>
								</div>
							</div>
						</div>
					</div></a
				>
			{/each}
		</div>
		<div class="md:w-1/4">
			{#each Column3 as coverImage}
				<a href="/{coverImage.expandedProject.name}">
					<div class="box">
						<div class="box m-4 rounded-3xl ">
							<div
								class="tether"
								id={'image-' + coverImage.id}
								bind:clientHeight={coverImage.clientHeight}
								bind:clientWidth={coverImage.clientWidth}
							>
								<img class="rounded-3xl" src={coverImage.fileBase64} alt={coverImage.title} />
							</div>
							<div
								class="tethered"
								style="height: {coverImage.clientHeight}px; width: {coverImage.clientWidth}px"
							>
								<div
									class="rounded-3xl bg-secondary h-full p-16"
									id={'description-' + coverImage.id}
								>
									<h1 class="mb-4">{coverImage.expandedProject.name}</h1>
									<p class="text-tertiary">{coverImage.expandedProject.description}</p>
								</div>
							</div>
						</div>
					</div></a
				>
			{/each}
		</div>
		<div class="md:w-1/4">
			{#each Column4 as coverImage}
				<a href="/{coverImage.expandedProject.name}">
					<div class="box">
						<div class="box m-4 rounded-3xl ">
							<div
								class="tether"
								id={'image-' + coverImage.id}
								bind:clientHeight={coverImage.clientHeight}
								bind:clientWidth={coverImage.clientWidth}
							>
								<img class="rounded-3xl" src={coverImage.fileBase64} alt={coverImage.title} />
							</div>
							<div
								class="tethered"
								style="height: {coverImage.clientHeight}px; width: {coverImage.clientWidth}px"
							>
								<div
									class="rounded-3xl bg-secondary h-full p-16"
									id={'description-' + coverImage.id}
								>
									<h1 class="mb-4">{coverImage.expandedProject.name}</h1>
									<p class="text-tertiary">{coverImage.expandedProject.description}</p>
								</div>
							</div>
						</div>
					</div></a
				>
			{/each}
		</div>
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
