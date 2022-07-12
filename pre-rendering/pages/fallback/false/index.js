import Link from "next/link";

export default function FallbackFalse({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/fallback/false/${post.id}`}>
              <h2>
                {post.id}. {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
      <h4>
        Only Three Posts are generated Statically. The rest will return 404
        error. Check below
      </h4>
      <Link href="/fallback/false/4">
        <h4>Click here for fetching fourth post</h4>
      </Link>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
