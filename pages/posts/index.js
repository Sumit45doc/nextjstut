import Link from "next/link";

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}



export default PostList
