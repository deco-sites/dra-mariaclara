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

export function generateListPosts( post: Post[]) {
    return post?.map((post, index) => {
        return post
    })
}

const postBlog = ( props: Props ) => {
    const {
        post = []
    } = props

    const listPosts = generateListPosts(post)

    console.log('listPosts', listPosts)

    const PostItem = listPosts.map((value, index) => {
        return (
            (value.image_post?.src) ?
                <div>
                    <div class="w-full flex justify-between">
                        <Image 
                            src={value.image_post?.src}
                            alt={value.image_post?.alt}
                            labe={value.image_post?.label}
                            width={200}
                            height={300}
                            decoding="async"
                            loading="eager"
                        />
                        <div>
                            <div
                                dangerouslySetInnerHTML={{ __html: value.title_post }}
                            />
                            <div
                                dangerouslySetInnerHTML={{ __html: value.short_description }}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{ __html: value.content_post }}
                        />
                    </div>
                </div>
            :
                <div>
                    <div class="w-full flex">
                        <div>
                            <h1>{value.title_post}</h1>
                            <div
                                dangerouslySetInnerHTML={{ __html: value.short_description }}
                            />
                        </div>
                    </div>
                    <div>
                        {value.content_post}
                    </div>
                </div>
        )
    })

    return (
        <div>
            {PostItem}
        </div>
    )
}

export default postBlog