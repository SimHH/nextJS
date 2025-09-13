import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "asns-serif"}}>
      <h1>Next.js</h1>
      <p>Start Next.js</p>

      <nav>
        <a href="/about" style={{ marginRight: "1rem" }}>About</a>
        <a href="/contact">Contact</a>
      </nav>
    </main>
  );
}
