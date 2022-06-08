import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-md">
      <div className="flex justify-between container mx-auto p-2">
        <div>logo here</div>
        <div className="flex gap-3">
          <Link href={"/"}>
            <a>Home</a>
          </Link>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
          <Link href={"/ninjas"}>
            <a>Ninja Listing</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
