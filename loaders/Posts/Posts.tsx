import { generateListPosts, Post } from "../../components/ui/ContentPosts.tsx";

export type Props = {
    list: Post
}

const loaderPostData = ( {list}: Props ) => {
    console.log('list', list);
    return list
}

export default loaderPostData