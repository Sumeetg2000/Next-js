import Link from "next/link";

export default function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <p>
            {article.id}.{article.title} | {article.category}
          </p>
        </div>
      ))}
      <hr />
      <h2>SSR with Dynamic Parameters</h2>
      <Link href="/news/sports">
        <i>All articles with Sports category</i>
      </Link>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
}
