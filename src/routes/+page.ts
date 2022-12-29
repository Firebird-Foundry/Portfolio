import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';
import type { Image } from 'src/lib/image';
import type { Project } from '$lib/project';

const pb = new PocketBase('http://116.202.30.252:81');

export const load = (async () => {
    const coverImages = await pb.collection('images').getList<Image>(1, 50, {
        filter: 'isCoverImage = true',
        expand: 'project',
    });

    coverImages.items.forEach(item => {item.fileUrl = pb.getFileUrl(item, item.file);
    item.expandedProject = item.expand.project as Project;
    });
    console.log(coverImages.items[0].expand.project as Project)

    return { CoverImages: coverImages.items };
}) satisfies PageLoad;


