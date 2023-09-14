"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "public/logo.png";

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-20 flex h-16 w-full items-center justify-between bg-opacity-30 pl-8 text-purple-400 backdrop-blur-lg backdrop-filter md:justify-normal">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="h-8 w-auto sm:h-10 lg:h-14"
          priority
        />
      </Link>
    </nav>
  );
}
