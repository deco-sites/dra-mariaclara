export interface Posts {
    title: string
    image_url: string
}

export interface Props {
    posts: Posts[]
}

export default function DogFacts({ posts }: Props) {
    return (
      <div class="p-4">
        <ul>
            {
                posts.map((data) => 
                    <li>
                        <img src={data.image_url} />
                        <h2>{data.title}</h2>
                    </li>
                )
            }
        </ul>
      </div>
    );
}