import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
      Env analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
