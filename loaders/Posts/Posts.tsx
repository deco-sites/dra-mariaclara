import { generateListPosts, Post } from "../../components/ui/ContentPosts.tsx";

export type Props = {
    list: Post[]
}

const loaderPostData = ( {list}: Props ) => {
    return list
}

export default loaderPostData