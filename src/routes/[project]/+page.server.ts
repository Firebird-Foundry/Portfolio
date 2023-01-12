import type { PageServerLoad } from './$types';
import { PocketBaseClient } from '$lib/pocketbaseClient.server';
import type { Project } from '$lib/project';
import type { Image } from '$lib/image';
import axios from 'axios';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	let project: Project;
	console.log(params.project)
	project = await PocketBaseClient.collection('projects').getFirstListItem<Project>(
		`name = '${params.project}'`
	);
	try {
		project = await PocketBaseClient.collection('projects').getFirstListItem<Project>(
			`name = '${params.project}'`
		);
	} catch (e) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const images = await PocketBaseClient.collection('images').getList<Image>(1, 50, {
		filter: `project = '${project.id}' && isCoverImage = false`
	});

	images.items = images.items.sort((a, b) => a.sortOrder - b.sortOrder);

	for (let i = 0; i < images.items.length; i++) {
		images.items[i].fileUrl = PocketBaseClient.getFileUrl(images.items[i], images.items[i].file);
		console.log(images.items[i].fileUrl)
		var fileData = await axios.get(images.items[i].fileUrl, {
			responseType: 'arraybuffer'
		});
		images.items[i].fileBase64 =
			'data:image/png;base64,' + Buffer.from(fileData.data, 'binary').toString('base64');
	}

	var headingImageIndex = images.items.findIndex((image) => image.isHeaderImage);
	var headingImage = headingImageIndex > -1 ? images.items.splice(headingImageIndex, 1)[0] : null;

	return {
		Project: JSON.parse(JSON.stringify(project)),
		HeadingImage: !!headingImage ? JSON.parse(JSON.stringify(headingImage)) : null,
		Images: JSON.parse(JSON.stringify(images.items))
	};
}) satisfies PageServerLoad;
