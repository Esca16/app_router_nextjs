"use client"

const BlogPage = ({params}) => {
    console.log(params);
    return (
        <div>
            {params.slug}
        </div>
    );
}

export default BlogPage;