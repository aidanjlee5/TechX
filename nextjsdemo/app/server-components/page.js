import Link from "next/link";
import React from "react";
import Sidebar from "../components/sidebar";

const serverComponents = () => {
    return (
    <main>
      <div className="container">
        <div className="sidebar">
        <Sidebar />
        </div>
       <div className="content">
        <div>Server Componentare used to divide the components up into different files, but reduces the amount of "requests" sent to the server as the entire page doesn't change, but only receives the necessary information for the new page. This helps optimize the perofrmance of the website</div>

        </div>
      </div>
    </main>
    )
}

export default serverComponents;