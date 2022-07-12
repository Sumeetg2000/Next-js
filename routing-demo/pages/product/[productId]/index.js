import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <button onClick={() => router.push("/product")}>All Products</button>
      <h1>Details about Product {productId}</h1>
      <hr />
      <h1>Nested Dynamic Routing</h1>
      <button onClick={() => router.push(`/product/${productId}/review/`)}>
        Review for Product-{productId}
      </button>
    </>
  );
}
