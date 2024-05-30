"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger-menu"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1 ">
            <Image
              src="/icons/logo.svg"
              height={32}
              width={32}
              alt="logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              Conferro
            </p>
          </Link>

          {/* We are having calculation which signify we want it to take full height, minus the height of where we have Yoom and Logo */}
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((el) => {
                  const isActive =
                    pathname === el.route ||
                    (pathname.startsWith(el.route) && el.route != "/");
                  return (
                    <SheetClose asChild key={el.route}>
                      <Link
                        href={el.route}
                        key={el.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-green-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={el.imgUrl}
                          alt={el.label}
                          height={20}
                          width={20}
                        />
                        <p className="font-semibold">{el.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
