import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

export interface ImagePost {
    src: ImageWidget;
    alt?: string;
    label?: string;
}

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

export interface Props {
    title?: string
    post: Post[]
}

const loaderPosts = async ( post: Post[] ) => {

    const posts = await post?.map((post, index) => {
        return post;
    })

}

export default loaderPosts