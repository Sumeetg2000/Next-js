import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductList({ productId = "100" }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.replace("/")}>Home</button>
      <h1>Following pages are created dynamically on build</h1>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product/3">Product 3</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <span>Product {productId}</span>
        </Link>
      </h2>
      <h2>
        <Link href="/product/static-product">Static Product</Link>
      </h2>
    </>
  );
}
