import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImagePost {
    src: ImageWidget;
    alt?: string;
    label?: string;
}

/** @title {{{title}}} */
export interface Post {
    title?: string;
    title_post?: HTMLWidget;
    image_post?: ImagePost;
    short_description?: HTMLWidget;
    content_post?: HTMLWidget;
    author?: string;
    url_post?: string;
    type_post?: "Procedimentos" | "Tratamentos";
}

export interface Props {
    title?: string
    post: Post[]
}

const loaderPostData = ( post: Props ) => {
    console.log('list', post);
    return post
}

export default loaderPostData