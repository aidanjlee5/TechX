import Link from "next/link";
import React from "react";
import Sidebar from "../components/sidebar";

const fileDef = () => {
    return (
    <main>
      <div className="container flex flex-col">
        <div className="sidebar flex-0">
        <Sidebar />
        </div>
       <div className="content flex-1" >
        <div>File definitions are a part of NextJs's framework that imports server components, allows for data fetching, and allows the page to only load in what is necessary</div>

        </div>
      </div>
    </main>
    )
}

export default fileDef;