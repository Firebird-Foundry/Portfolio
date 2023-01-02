import type { Record } from "pocketbase";
import type { Project } from "./project";

export interface Image extends Record {
    title: string,
    isCoverImage: boolean,
    project: string,
    description: string,
    isHeaderImage: boolean,
    file: string,
    fileUrl: string,
    expandedProject: Project
}