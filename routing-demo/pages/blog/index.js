import { useRouter } from "next/router";
import Link from 'next/link'

export default function Blog() {
  const router = useRouter();
  return (
    <>
      <h1>
        <Link href="/" replace>
          Return Home
        </Link>
      </h1>
      <h1> This is Blog Page</h1>
    </>
  );
}
