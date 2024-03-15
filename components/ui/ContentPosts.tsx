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


const ContentPosts = ( props: Props ) => {
    
    const {
        post = []
    } = props

    const listPosts = generateListPosts(post)

    const postItems = listPosts.map((post, index) => {
        const urlPost = `${(post?.type_post)?.toLocaleLowerCase()}/${post?.url_post}`
        return (
            <li class="mb-[15px] max-h-[350px] w-[350px] border rounded-[4px] border-[#EAEBE6]">
                <a href={urlPost} class="block">
                    <article class="flex flex-col">
                        <figure class="w-full max-h-[250px]">
                            <Image
                                class="w-full max-h-[150px]"
                                src={post.image_post?.src}
                                alt={post.image_post?.alt}
                                label={post.image_post?.label}
                                width={100}
                                height={150}
                            />
                            {/* <figcaption class="text-[20px] mt-4 font-bold px-3">{post.image_post?.label}</figcaption> */}
                        </figure>
                        <div class="flex flex-col gap-1 px-3 mb-2">
                            <p class="text-[20px] mt-4 font-bold text-[#EAEBE6]">{post?.title}</p>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.short_description }}
                                class="text-[14px] font-light pt-2 font-display pb-[10px] line-clamp-3 max-h-[70px] text-ellipsis text-[#EAEBE6]"
                            >
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="font-light text-[12px] text-[#EAEBE6]">
                                    {post.author}
                                </p>
                            </div>
                        </div>
                    </article>
                </a>
            </li>
        )
    })


    return (
        <ul class="flex flex-wrap justify-between container">
            {postItems}
        </ul>
    )
    

}

export default ContentPosts