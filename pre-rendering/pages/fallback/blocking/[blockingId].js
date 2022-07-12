export default function Post({ post }) {
  return (
    <>
      <h2>
        {post.id}. {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blockingId: "1" } },
      { params: { blockingId: "2" } },
      { params: { blockingId: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blockingId}`
  );
  const post = await response.json();
  return {
    props: { post },
  };
}
