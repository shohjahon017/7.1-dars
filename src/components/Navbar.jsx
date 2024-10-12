import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between  mx-auto ">
        <div className="flex-1 ml-16 ">
          <a className="btn btn-ghost text-xl">Food Blog</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className="mr-16">
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2 ">
                  <li>
                    <a href="/">Pagination</a>
                  </li>
                  <li>
                    <a href="/spagination"> Scroll Pagination</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
