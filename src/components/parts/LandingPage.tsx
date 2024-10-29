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
      <section className="flex h-screen flex-col justify-between p-4 xs:p-8">
        <article className="flex h-1/3 w-full flex-col items-start justify-start gap-4">
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
        <article className="flex h-1/3 w-full flex-col text-2xl font-bold tracking-widest text-white">
          <div className="flex h-full items-start justify-start">
            <Link
              href="https://jkt48.com"
              target="_blank"
              className="underline underline-offset-4"
            >
              JKT48
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/landing-page/lily.svg"
              alt="LILY"
              width={500}
              height={500}
              loading="lazy"
              className="w-[100px] xs:w-fit"
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
          <div className="flex h-full items-end justify-end">
            <button
              type="button"
              onClick={() => handleOpenModal()}
              className="underline underline-offset-4"
            >
              MORE
            </button>
          </div>
        </article>
        <article className="flex h-1/3 w-full flex-col-reverse items-end justify-start gap-4">
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
