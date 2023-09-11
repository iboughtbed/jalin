"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "public/logo.png";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-20 flex h-16 w-full items-center justify-between bg-opacity-30 text-purple-400 backdrop-blur-lg backdrop-filter md:justify-normal">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="mr-28 h-32 w-32 md:h-40 md:w-40"
        />
      </Link>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger className="pr-4">
            <Button variant="ghost" size="icon" asChild>
              <Icons.menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-purple-800">
            <SheetHeader className="text-purple-100">
              <SheetTitle className="mb-8 text-white">Other pages</SheetTitle>
              <div className="flex flex-col gap-10 text-2xl">
                <Button variant="link" asChild>
                  <Link
                    href="/team"
                    className="text-white hover:text-purple-300 md:text-lg"
                  >
                    Team
                  </Link>
                </Button>
                <Button variant="link" asChild>
                  <Link
                    href="/programme"
                    className="text-white hover:text-purple-300 md:text-lg"
                  >
                    Programme
                  </Link>
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <menu className="hidden gap-16 sm:flex md:gap-24">
        <Button variant="link" asChild>
          <Link
            href="/team"
            className="text-white hover:text-purple-300 md:text-lg"
          >
            Team
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link
            href="/programme"
            className="text-white hover:text-purple-300 md:text-lg"
          >
            Programme
          </Link>
        </Button>
      </menu>
    </nav>
  );
}
