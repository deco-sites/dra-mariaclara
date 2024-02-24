import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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


export function generateListPosts( post: Post[]) {
    return post?.map((post, index) => {
        return (
            <li>
                <a href={post.link_post} class="block px-3">
                    <article class="flex flex-col">
                        <figure class="w-full">
                            <Image
                                class="w-full object-cover"
                                src={post.image_post?.src}
                                alt={post.image_post?.alt}
                                width={200}
                                height={300}
                            />
                            <figcaption class="text-[16px] mt-4 font-light">{post.image_post?.label}</figcaption>
                        </figure>
                        <div class="flex flex-col gap-1">
                            {/* <p class="text-base font-light pb-14 pt-2">{post.short_description}</p> */}
                            <div
                                dangerouslySetInnerHTML={{ __html: post.short_description }}
                                class="text-[14px] font-light pb-14 pt-2 font-display"
                            >
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="font-light text-xs">
                                    {post.author}
                                </p>
                            </div>
                        </div>
                    </article>
                </a>
            </li>
        )
    })
}


export default function ContentPosts( props: Props ) {
    
    const {
        post = []
    } = props

    const listPosts = generateListPosts(post)
    
    return (
        <ul class="grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(3,_2fr)] gap-x-[10px] gap-y-[10px] container">
            {listPosts}
        </ul>
    )

}