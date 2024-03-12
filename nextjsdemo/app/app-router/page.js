import Link from "next/link";
import React from "react";
import Sidebar from "../components/sidebar";

const appRouter = () => {
    return (
    <main>x
      <div className="container">
        <div className="sidebar">
        <Sidebar />
        </div>
       <div className="content" >
        <div>NextJS has dynamic routing, where each React component file in the app directory hass a corresponding URL that can be organized into subsets of other folders. The routes also have built-in routes for API and nested routes</div>

        </div>
      </div>
    </main>
    )
}

export default appRouter;