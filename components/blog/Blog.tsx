import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

export interface ImagePost {
    src: ImageWidget;
    alt?: string;
    label?: string;
}

/** @title {{{path}}} */
export interface Post {
    title?: string;
    title_post?: HTMLWidget;
    image_post?: ImagePost;
    short_description?: HTMLWidget;
    content_post?: HTMLWidget;
    author?: string;
    link_post?: string;
    type_post?: "Procedimento" | "Tratamento";
}

export interface PostData {
    title: string;
    descr: string;
    /**
     * @format textarea
     */
    content?: string;
    seo?: {
      title?: string;
      description?: string;
      image?: ImageWidget;
      canonical?: string;
    };
  }

export interface PostList {
    post?: Post[]
}

export function getBlogPath(fname: string) {
    return `/blog/${fname}`;
}  