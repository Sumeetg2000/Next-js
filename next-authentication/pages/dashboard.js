import { signIn, useSession } from "next-auth/react";

export default function Dashboard() {
  //Securing Pages Client-side, can use useSession hook or getSession for this.
  const { status, data } = useSession();
  console.log({ status, data });

  if (status === "unauthenticated") {
    signIn();
  }

  if (status === "loading") {
    return <h2>...Loading</h2>;
  }
  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
}
