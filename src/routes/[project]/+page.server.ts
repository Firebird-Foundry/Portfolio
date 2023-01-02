import type { PageServerLoad } from './$types';
import { PocketBaseClient } from '$lib/pocketbaseClient.server';
import type { Project } from '$lib/project';
import type { Image } from '$lib/image';

function randomize<T>(array: T[]): T[] {
    return array.map(x => x).sort(() => Math.random() - 0.5);
}

export const load = (async ({params}) => {
    const project = await PocketBaseClient.collection('projects')
                                          .getFirstListItem<Project>(`name = '${params.project}'`);
    const images = await PocketBaseClient.collection('images')
                                         .getList<Image>(1, 50, {filter: `project = '${project.id}' && isCoverImage = false`});
    images.items.forEach(item => {item.fileUrl = PocketBaseClient.getFileUrl(item, item.file) });
    
    var headingImageIndex = images.items.findIndex(image => image.isHeaderImage);
    var headingImage = images.items.splice(headingImageIndex, 1)[0];

    var galleryImages = images.items.filter(x => x!.description);
    var bodyImages = images.items.filter(x => !!x.description);

    galleryImages = galleryImages.concat(galleryImages).concat(galleryImages).concat(galleryImages);
    galleryImages = randomize(galleryImages);

    let column1 = galleryImages.filter((x, i) => i % 4 == 0);
    let column2 = galleryImages.filter((x, i) => i % 4 == 1);
    let column3 = galleryImages.filter((x, i) => i % 4 == 2);
    let column4 = galleryImages.filter((x, i) => i % 4 == 3);

    return { 
                Project: JSON.parse(JSON.stringify(project)), 
                HeadingImage: JSON.parse(JSON.stringify(headingImage)),    
                GalleryImages: JSON.parse(JSON.stringify(galleryImages)), 
                BodyImages: JSON.parse(JSON.stringify(bodyImages)), 
                Column1: JSON.parse(JSON.stringify(column1)), 
                Column2: JSON.parse(JSON.stringify(column2)), 
                Column3: JSON.parse(JSON.stringify(column3)),
                Column4: JSON.parse(JSON.stringify(column4)) 
            };
}) satisfies PageServerLoad;