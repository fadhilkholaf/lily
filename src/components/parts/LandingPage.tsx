"use client";

import Image from "next/image";
import Link from "next/link";
import MenuModal from "../MenuModal";
import { useState } from "react";

const LandingPage = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setDisplayModal(true);
    setTimeout(() => {
      setOpenModal(true);
    }, 1);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => {
      setDisplayModal(false);
    }, 500);
  };

  return (
    <>
      <section className="h-screen flex flex-col justify-between p-4 xs:p-8">
        <article className="w-full h-1/3 flex justify-start items-start flex-col gap-4">
          <Image
            src="/images/landing-page/hillary.svg"
            alt="HILLARY"
            width={500}
            height={500}
            loading="lazy"
            className="w-fit"
          />
          <Image
            src="/images/landing-page/hillary-hiragana.svg"
            alt="ヒラリー"
            width={500}
            height={500}
            loading="lazy"
            className="w-[100px]"
          />
        </article>
        <article className="w-full h-1/3 flex flex-col text-white font-bold tracking-widest text-2xl">
          <div className="h-full flex justify-start items-start">
            <Link
              href="https://jkt48.com"
              target="_blank"
              className="underline underline-offset-4"
            >
              JKT48
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/images/landing-page/lily.svg"
              alt="LILY"
              width={500}
              height={500}
              loading="lazy"
              className="xs:w-fit w-[100px]"
            />
            <Image
              src="/images/landing-page/lily-hiragana.svg"
              alt="リリー"
              width={500}
              height={500}
              loading="lazy"
              className="w-[100px]"
            />
          </div>
          <div className="h-full flex justify-end items-end">
            <button
              type="button"
              onClick={() => handleOpenModal()}
              className="underline underline-offset-4"
            >
              MORE
            </button>
          </div>
        </article>
        <article className="w-full h-1/3 flex justify-start items-end flex-col-reverse gap-4">
          <Image
            src="/images/landing-page/abigail.svg"
            alt="ABIGAIL"
            width={500}
            height={500}
            loading="lazy"
            className="w-fit"
          />
          <Image
            src="/images/landing-page/abigail-hiragana.svg"
            alt="アビガイル"
            width={500}
            height={500}
            loading="lazy"
            className="w-[100px]"
          />
        </article>
      </section>
      <MenuModal
        displayed={displayModal}
        opened={openModal}
        handleCloseModal={() => handleCloseModal()}
      />
    </>
  );
};

export default LandingPage;
