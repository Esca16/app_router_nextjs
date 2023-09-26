"use client"

import { useEffect, useState } from "react"

export default function home() {
  const [posts, setPosts] = useState([]);
  // const data = await getData();

  const getData = async () => {
    console.log("fetch data");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts([...data]);
  };
  useEffect(() => {
    if (posts.length < 1) {
      getData();
    }
  }, [])

  return (
    <main>
      Home Page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  )
}
