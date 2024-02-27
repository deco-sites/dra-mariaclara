import {ContentPosts} from "../ui/ContentPosts.tsx"

export interface Props {
    post: ContentPosts
}

export default function postPage( { post: { ContentPosts, props } }: Props ) {
    
    console.log('ContentPosts', ContentPosts)

    return (
        <div className="flex gap-4">
            <ContentPosts {...props} />
        </div>
    )
}