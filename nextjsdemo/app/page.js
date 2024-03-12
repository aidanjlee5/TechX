import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="sidebar">
        <Sidebar />
        </div>
       <div className="content">
        <div>Next.js gets easier, don't worry</div>

        <Image src="/smilingAidan.jpg" alt="Encouraging Smile" width={200} height={200} />

        </div>
      </div>
    </main>
  );


}
