import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    return { ProjectTitle: params.project};
}) satisfies PageLoad;