export default function False({ post }) {
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
      { params: { falseId: "1" } },
      { params: { falseId: "2" } },
      { params: { falseId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.falseId}`
  );
  const data = await response.json();
  return {
    props: { post: data },
  };
}
