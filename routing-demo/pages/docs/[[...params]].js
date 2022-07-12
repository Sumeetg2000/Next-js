import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  const returnBtn = (
    <button onClick={() => router.push(params.length === 0 ? "/" : "/docs")}>
      {params.length === 0 ? "Return to Home Page" : "Return to Docs Home Page"}
    </button>
  );

  if (params.length === 2) {
    return (
      <>
        {returnBtn}
        <h1>
          Viewing docs for feature {params[0]} and concept {params[1]}
        </h1>
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        {returnBtn}
        <h1>Viewing docs for feature {params[0]}</h1>
      </>
    );
  }
  return (
    <>
      {returnBtn}
      <h1>Docs Home Page</h1>
    </>
  );
}
