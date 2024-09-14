"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { loginAction, logoutAction } from "@/actions";

function Header({ getSession }) {
  console.log(getSession, "Header");

  const handleAuthSignIn = async () => {
    await loginAction();
  };
  const handleSignOut = async () => {
    await logoutAction();
    //window.location.reload();
  };

  return (
    <header className="flex shadow-md py-4 px-10 bg-white min-h-[70px] tracking-wide relative z-50 ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full font-bold">
        <Link href={"/"}>Shopping Cart</Link>
      </div>

      <ul className="flex gap-6 items-center justify-center mr-10 font-semibold text-lg">
        <li>
          <Link href={"/"}>Products</Link>
        </li>
        <li>
          <Link href={"/cart"}>Cart</Link>
        </li>
      </ul>

      <div className="flex space-x-3">
        <form action={getSession?.user ? handleSignOut : handleAuthSignIn}>
          <Button type="submit">{getSession?.user ? "Logout" : "Login"}</Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
