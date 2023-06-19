import React from "react";
import Logo from "@/assets/img/logo.svg";
import { Link } from "react-router-dom";
import styles from "./styles";

export default function Header() {
  return (
    <nav className="py-6 max-w-[1350px] shadow-1 ">
      <div className={` ${styles.paddingX} flex justify-between items-center`}>
        {/* logo----- */}
        <Link>
          <img src={Logo} />
        </Link>
        {/* button----- */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="">
            {" "}
            Login
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white py-3 px-4 rounded-lg"
            to=""
          >
            Sign up{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}
