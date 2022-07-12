import { getSession } from "next-auth/react";

export default function Blog({ blogs }) {
  return (
    <>
      <h1>Blog Page -{blogs}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  // Server-side Authentication
  const session = await getSession(context);

  //Securing Pages Server-side
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      blogs: session ? "List of perzonalized blogs" : "List of free blogs",
    },
  };
}
