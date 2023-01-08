import type { PageServerLoad } from './$types';
import { PocketBaseClient } from '$lib/pocketbaseClient.server';
import type { Project } from '$lib/project';
import type { Image } from '$lib/image';
import axios from 'axios';

function randomize<T>(array: T[]): T[] {
	return array.map((x) => x).sort(() => Math.random() - 0.5);
}

export const load = (async ({ params }) => {
	const project = await PocketBaseClient.collection('projects').getFirstListItem<Project>(
		`name = '${params.project}'`
	);
	const images = await PocketBaseClient.collection('images').getList<Image>(1, 50, {
		filter: `project = '${project.id}' && isCoverImage = false`
	});

	images.items = images.items.sort((a, b) => a.sortOrder - b.sortOrder);

	for (let i = 0; i < images.items.length; i++) {
		images.items[i].fileUrl = PocketBaseClient.getFileUrl(images.items[i], images.items[i].file);
		var fileData = await axios.get(images.items[i].fileUrl, {
			  	responseType: 'arraybuffer'
				});
		images.items[i].fileBase64 = "data:image/png;base64," + Buffer.from(fileData.data, 'binary').toString('base64');
	}

	var headingImageIndex = images.items.findIndex((image) => image.isHeaderImage);
	var headingImage = images.items.splice(headingImageIndex, 1)[0];

	var galleryImages = images.items.filter((x) => !x.description);
	var bodyImages = images.items.filter((x) => !!x.description);

	galleryImages = randomize(galleryImages);

	let column1 = galleryImages.filter((x, i) => i % 4 == 0);
	let column2 = galleryImages.filter((x, i) => i % 4 == 1);
	let column3 = galleryImages.filter((x, i) => i % 4 == 2);
	let column4 = galleryImages.filter((x, i) => i % 4 == 3);

	let bodyImagesFirstThird = bodyImages.slice(0, Math.ceil(bodyImages.length / 3));
	let bodyImagesSecondThird = bodyImages.slice(
		Math.ceil(bodyImages.length / 3),
		Math.ceil(bodyImages.length / 3) * 2
	);
	let bodyImagesThirdThird = bodyImages.slice(
		Math.ceil(bodyImages.length / 3) * 2,
		bodyImages.length
	);

	return {
		Project: JSON.parse(JSON.stringify(project)),
		HeadingImage: !!headingImage ? JSON.parse(JSON.stringify(headingImage)) : null,
		Images: JSON.parse(JSON.stringify(galleryImages.concat(bodyImages))),
		BodyImagesFirstThird: JSON.parse(JSON.stringify(bodyImagesFirstThird)),
		BodyImagesSecondThird: JSON.parse(JSON.stringify(bodyImagesSecondThird)),
		BodyImagesThirdThird: JSON.parse(JSON.stringify(bodyImagesThirdThird)),
		Column1: JSON.parse(JSON.stringify(column1)),
		Column2: JSON.parse(JSON.stringify(column2)),
		Column3: JSON.parse(JSON.stringify(column3)),
		Column4: JSON.parse(JSON.stringify(column4))
	};
}) satisfies PageServerLoad;
