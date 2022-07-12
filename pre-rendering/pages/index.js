import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Pre-rendering</h1>
      <h2>Static Site Generation(SSG) [with getStaticProps()]</h2>
      <Link href="/users/">Users</Link>
      <hr />
      <h2>SSG with Dynamic Parameters [with getStaticPaths()]</h2>
      <Link href="/posts/">Posts</Link>
      <hr />
      <h3>Fallback in getStaticProps()</h3>
      <Link href="/fallback/">Fallback</Link>
      <hr />
      <h3>Incremental Static Regeneration(ISR)</h3>
      <Link href="/products/">Products</Link>
      <hr />
      <h2>Server-side Rendering (SSR) [with getServerSideProps()]</h2>
      <Link href="/news/">News</Link>
      <hr />
      <h2>Client-side Data Fetching</h2>
      <Link href={"/dashboard/"}>Dashboard</Link>
      <hr />
      <h3>SWR for Client-side Data Fetching</h3>
      <Link href={"/dashboard-swr/"}>Dashboard with SWR</Link>
      <hr />
      <h2>Pre rendering + Client side Data Fetching</h2>
      <Link href={"/events/"}>Events</Link>
      <hr />
    </>
  );
}
