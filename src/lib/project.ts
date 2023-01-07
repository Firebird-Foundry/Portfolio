import type { Record } from 'pocketbase';

export interface Project extends Record {
	name: string;
	blurb: string;
	description: string;
	sortOrder: number;
}
