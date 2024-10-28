// CREDITS TO OLIVIER LAROSE : https://blog.olivierlarose.com

"use client";

import { createRef, RefObject, useEffect, useRef } from "react";
import Image from "next/image";

const CursorGallery = () => {
  const refs = useRef<RefObject<HTMLImageElement>[]>(
    Array.from({ length: 29 }, () => createRef())
  );
  let currentIndex: number = 0;
  let steps: number = 0;
  let nbOfImages: number = 0;

  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMovement = (e: PointerEvent | TouchEvent) => {
    let clientX: number = 0;
    let clientY: number = 0;

    if (e instanceof PointerEvent) {
      steps += Math.abs(e.movementX) + Math.abs(e.movementY);

      clientX = e.pageX;
      clientY = e.pageY;
    } else {
      const touch = e.touches[0];

      const deltaX = touch.clientX - lastPosition.current.x;
      const deltaY = touch.clientY - lastPosition.current.y;

      steps += Math.abs(deltaX) + Math.abs(deltaY);

      lastPosition.current = { x: touch.clientX, y: touch.clientY };

      clientX = touch.pageX;
      clientY = touch.pageY;
    }

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY);
      if (nbOfImages == refs.current.length - 1) {
        removeImage();
      }
    }

    if (currentIndex == refs.current.length) {
      currentIndex = 0;

      steps = -150;
    }
  };

  const moveImage = (x: number, y: number) => {
    const currentImage = refs.current[currentIndex].current;

    if (currentImage) {
      currentImage.style.transitionTimingFunction =
        "cubic-bezier(0.22, 1, 0.36, 1)";
      currentImage.style.transitionDuration = "500ms";
      currentImage.style.transform = `translate(-50%, -50%) rotate(${
        (Math.random() * 2 - 1) * 20
      }deg)`;
      currentImage.style.left = x + "px";
      currentImage.style.top = y + "px";

      currentIndex++;
      nbOfImages++;

      setZIndex();

      setTimeout(() => {
        removeImage();
      }, 500);
    }
  };

  const getCurrentImages = () => {
    const images = [];
    const indexOfFirst = currentIndex - nbOfImages;

    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i;
      if (targetIndex < 0) {
        targetIndex += refs.current.length;
      }
      images.push(refs.current[targetIndex].current);
    }

    return images;
  };

  const removeImage = () => {
    const images = getCurrentImages();

    if (images[0]) {
      images[0].style.transitionTimingFunction =
        "cubic-bezier(0.83, 0, 0.17, 1)";
      images[0].style.transitionDuration = "1000ms";
      images[0].style.transform = "translate(-50%, 100vh) rotate(0deg)";
    }

    nbOfImages--;
  };

  const setZIndex = () => {
    const images = getCurrentImages();

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (image !== null) {
        image.style.zIndex = `${i}`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("pointermove", handleMovement);
    window.addEventListener("touchstart", handleMovement);
    window.addEventListener("touchmove", handleMovement);

    return () => {
      window.removeEventListener("pointermove", handleMovement);
      window.removeEventListener("touchstart", handleMovement);
      window.removeEventListener("touchmove", handleMovement);
    };
  });

  return (
    <section
      id="cursorGalleryContainer"
      className="h-screen absolute w-full overflow-hidden top-0 left-0 -z-10"
    >
      {refs.current.map((ref, index) => (
        <Image
          key={index}
          ref={ref}
          src={`/images/lily/${index}.jpg`}
          alt={`Image ${index}`}
          width={500}
          height={500}
          loading="lazy"
          className="w-[20vw] absolute -translate-x-1/2 transition-transform top-[200vh] left-1/2 rounded-lg"
        />
      ))}
    </section>
  );
};

export default CursorGallery;
