import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-slate-200">
      <Link className="btn btn-ghost text-xl" href="/">
        Home
      </Link>
      <Link className="btn btn-ghost text-xl" href="/actors">
        Actors
      </Link>
      <Link className="btn btn-ghost text-xl" href="/studio">
        Studio
      </Link>
    </div>
  );
};

export default NavBar;
