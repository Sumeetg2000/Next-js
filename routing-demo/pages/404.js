import Link from "next/link";
import Image from "next/image";
import error from "../public/404.webp";

export default function PageNotFound() {
  return (
    <Link href="/">
      <Image src={error} layout="fill" />
    </Link>
  );
}
