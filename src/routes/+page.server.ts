import type { PageServerLoad } from './$types';
import type { Image } from 'src/lib/image';
import type { Project } from '$lib/project';
import { PocketBaseClient } from '$lib/pocketbaseClient.server';
import axios from 'axios';

export const load = (async () => {
	const coverImages = await PocketBaseClient.collection('images').getList<Image>(1, 50, {
		filter: 'isCoverImage = true',
		expand: 'project'
	});
	
	for (let i = 0; i < coverImages.items.length; i++) {
		coverImages.items[i].fileUrl = PocketBaseClient.getFileUrl(coverImages.items[i], coverImages.items[i].file);
		var fileData = await axios.get(coverImages.items[i].fileUrl, {
			  	responseType: 'arraybuffer'
				});
		coverImages.items[i].fileBase64 = "data:image/png;base64," + Buffer.from(fileData.data, 'binary').toString('base64');
		coverImages.items[i].expandedProject = coverImages.items[i].expand.project as Project;
	}

	const intro = await PocketBaseClient.collection('content').getFirstListItem<Project>(
		`name = 'Intro'`
	);

	return { 
		CoverImages: JSON.parse(JSON.stringify(coverImages.items)),
		Intro: intro.text 
	};
}) satisfies PageServerLoad;
