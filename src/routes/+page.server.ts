import type { PageServerLoad } from './$types';
import type { Image } from 'src/lib/image';
import type { Project } from '$lib/project';
import { PocketBaseClient } from '$lib/pocketbaseClient.server';

export const load = (async () => {
    const coverImages = await PocketBaseClient.collection('images').getList<Image>(1, 50, {
        filter: 'isCoverImage = true',
        expand: 'project',
    });

    coverImages.items.forEach(item => {item.fileUrl = PocketBaseClient.getFileUrl(item, item.file);
    item.expandedProject = item.expand.project as Project;
    });

    return { CoverImages: JSON.parse(JSON.stringify(coverImages.items)) };
}) satisfies PageServerLoad;


