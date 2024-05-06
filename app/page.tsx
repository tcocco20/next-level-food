import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />f<Link href="/about">Go to About Page</Link>
    </main>
  );
}
