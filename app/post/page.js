import Comment from "@/components/Comment";

const getPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts = await res.json();
    return posts;
}

const Post = async () => {
    const posts = await getPost();
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id} className="my-8">
                            <h1 className="font-bold text-lg mb-4">{post.title}</h1>
                            <Comment postId={post.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Post;