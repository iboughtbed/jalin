import Link from "next/link";

import { Icons } from "~/components/icons";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export default function SiteFooter() {
  return (
    <div className="flex h-40 items-center justify-between gap-4 px-8 text-white max-sm:text-xs md:px-24 lg:px-36">
      <div className="basis-1/4">© 2023 Jalin</div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Contact us</span>
        <span className="flex items-center gap-1">
          <Icons.mail className="h-4 w-4" /> jalin.nis2023@gmail.com
        </span>
        <Dialog>
          <DialogTrigger>
            <span className="flex items-center gap-1 transition-all hover:text-purple-500">
              <Icons.instagram className="h-4 w-4" /> Instagram
            </span>
          </DialogTrigger>
          <DialogContent className="w-5/6 bg-background text-white">
            <div className="flex flex-col gap-2 text-lg">
              <Link
                className="text-xl text-purple-500"
                href={"https://www.instagram.com/jalin.team"}
              >
                jalin.team (main account)
              </Link>
              <Link href={"https://www.instagram.com/iboughtbed"}>
                iboughtbed / Sanzhar (developer)
              </Link>
              <Link href={"https://www.instagram.com/d1tch4"}>
                d1tch4 / Darhan (designer)
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div>All pictures are made by the authors.</div>
    </div>
  );
}
