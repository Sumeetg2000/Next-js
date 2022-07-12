import { useRouter } from "next/router";

export default function StaticProduct() {
  const router=useRouter();
  return (
    <>
      <button onClick={() => router.push("/product")}>All Products</button>
      <h1> Static Product Page</h1>
    </>
  );
}
