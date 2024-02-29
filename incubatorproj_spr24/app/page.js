import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div> Hi Guys </div>
      <Link href="/app-router">Click here for the app router page</Link>
      <br />
      <Link href="/file-def">Click here for the file definitions page</Link>
      <br />
      <Link href="/server-components">Click here for the server components page</Link>
    </main>
  );
}
