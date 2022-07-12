import Head from "next/head";

export default function HeadComponent() {
  return (
    <>
      <Head>
        <title>Head Component</title>
        <meta name="description" content="Creating Head Component" />
      </Head>
      <h1 className="content">Head Component</h1>
    </>
  );
}
