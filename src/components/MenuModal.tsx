import { useState } from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";
import Image from "next/image";

const menus: { title: string; href: string }[] = [
  { title: "PROFILE", href: "https://jkt48.com/member/detail/id/283?lang=id" },
  { title: "INSTAGRAM", href: "https://instagram.com/jkt48.lily_" },
  { title: "X", href: "https://x.com/Lily_JKT48" },
];

const MenuModal = ({
  displayed,
  opened,
  handleCloseModal,
}: {
  displayed: boolean;
  opened: boolean;
  handleCloseModal: () => void;
}) => {
  const [preview, setPreview] = useState<number>(0);

  return (
    <section
      className={cn("fixed left-0 top-0 hidden h-screen w-screen", {
        block: displayed,
      })}
    >
      <div
        className={cn(
          "h-full w-full backdrop-blur-none transition-all duration-[250ms] ease-out",
          { "bg-white/10 backdrop-blur": opened },
        )}
        onClick={handleCloseModal}
      ></div>
      {[...Array(menus.length).keys()].map((_, index) => (
        <Image
          key={index}
          src={`/images/lily/${index}.jpg`}
          alt={`Preview ${index}`}
          width={500}
          height={500}
          className={cn(
            "absolute hidden w-[25vw] rounded-lg object-cover xs:block",
            "left-8 top-1/2 -translate-x-[150%] -translate-y-1/3 rotate-0",
            "ease-[cubic-bezier(0.22, 1, 0.36, 1)] transition-all duration-500",
            {
              "-translate-y-1/2 translate-x-0 rotate-6":
                index === preview && opened,
            },
          )}
        />
      ))}
      <article
        className={cn(
          "absolute flex h-[600px] w-screen flex-col justify-between rounded-lg bg-white p-4 text-pink-500 xs:w-[400px]",
          "-right-1/2 top-1/2 -translate-y-1/3 translate-x-[150%] rotate-0 xs:right-8",
          "ease-[cubic-bezier(0.22, 1, 0.36, 1)] transition-all duration-500",
          {
            "-translate-x-1/2 -translate-y-1/2 -rotate-3 xs:translate-x-0":
              opened,
          },
        )}
      >
        <ul className="flex flex-col gap-8 text-4xl font-bold">
          <li className="flex justify-end">
            <button
              type="button"
              onClick={handleCloseModal}
              className="group h-[40px] w-[40px] overflow-hidden"
            >
              <div className="ease-[cubic-bezier(0.22, 1, 0.36, 1)] relative transition-all duration-500 group-hover:rotate-90">
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 block h-[10px] w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-pink-500",
                  )}
                ></span>
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 block h-[10px] w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-pink-500",
                  )}
                ></span>
              </div>
            </button>
          </li>
          {menus &&
            menus.map((menu, index) => (
              <li key={index} onPointerOver={() => setPreview(index)}>
                <Link
                  href={menu.href}
                  target="_blank"
                  className={cn(
                    "relative block w-full",
                    "before:ease-[cubic-bezier(0.22, 1, 0.36, 1)] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-pink-500 before:transition-all before:duration-[250ms] hover:before:scale-x-100 hover:before:duration-500",
                    "after:ease-[cubic-bezier(0.22, 1, 0.36, 1)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-100 after:bg-pink-500 after:transition-all after:duration-500 hover:after:scale-x-0 hover:after:duration-[250ms]",
                  )}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
        </ul>
        <Link
          href="https://fadhilkholaf.my.id"
          target="_blank"
          className="text-xs font-semibold tracking-wider"
        >
          Made with ❤️ by{" "}
          <span className="underline underline-offset-2">
            fadhilkholaf.my.id
          </span>
        </Link>
      </article>
    </section>
  );
};

export default MenuModal;
