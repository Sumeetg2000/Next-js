import { Article } from "../../components/Article";

export default function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing News for <i>{category}</i>
      </h1>
      {articles.map(({ id, title, description }) => (
        <Article description={description} id={id} title={title} key={id} />
      ))}
    </>
  );
}

const getNewsByCategory = async (category) =>
  fetch(`http://localhost:4000/news?category=${category}`);

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(req.headers.cookie);
  console.log(query);
  res.setHeader("Set-Cookie", ["name=Sumeet"]);
  const { category } = params;
  const response = await getNewsByCategory(category);
  const articles = await response.json();
  return {
    props: {
      articles,
      category,
    },
  };
}
