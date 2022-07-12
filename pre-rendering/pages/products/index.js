import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h2>
              {product.id}. {product.title} - {product.price}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();
  return {
    props: { products },
    revalidate: 10,
  };
}
