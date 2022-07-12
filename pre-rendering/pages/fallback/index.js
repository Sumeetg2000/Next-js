import Link from "next/link";
export default function Fallback() {
  return (
    <>
      <Link href="/fallback/true">
        <h4>Fallback - true</h4>
      </Link>
      <Link href="/fallback/false">
        <h4>Fallback - false</h4>
      </Link>
      <Link href="/fallback/blocking">
        <h4>Fallback - blocking</h4>
      </Link>
    </>
  );
}
