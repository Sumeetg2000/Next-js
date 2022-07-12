import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1> Home Page</h1>
      <hr />
      <h2>Normal Routing</h2>
      <Link href={"/about"}>About Page</Link>
      <br />
      <Link href={"/profile"}>Profile Page</Link>

      <h1>Nested Routing</h1>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <hr />
      <h1>Dynamic Routing</h1>
      <button onClick={() => router.push("/product")}>Place Order</button>
      <hr />
      <h1>Catch all routes</h1>
      <h2>
        <Link href="/docs">Docs</Link>
      </h2>
      <hr />
      {/* <h2>
        <Link href="/product">Products</Link>
      </h2> */}
    </div>
  );
}
