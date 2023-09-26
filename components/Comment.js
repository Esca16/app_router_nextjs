const getCommentsByPost = async (id) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = await res.json();
    return comments;
}

const Comment = async ({postId}) => {
    const comments = await getCommentsByPost(postId)
    return (
        <div>
            <ul>
                {comments.map((comment)=>{
                    return (
                        <li key={comment.id} className="my-3 mx-auto w-[90%] px-2 py-3 bg-slate-100">
                            <h5 className="font-semibold">{comment.email}</h5>
                            <p>{comment.body} </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Comment;