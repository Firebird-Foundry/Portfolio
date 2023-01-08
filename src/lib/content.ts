import type { Record } from 'pocketbase';

export interface Content extends Record {
	name: string;
	blurb: string;
}
