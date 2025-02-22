"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles/globals.css";
import ramadanImage from "../../public/ramadanWallpaper.jpg";
import { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      if (audio && audio.paused) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
      }
    };

    // Play music when user clicks anywhere or presses a key
    document.addEventListener("click", playAudio);
    document.addEventListener("keydown", playAudio);

    // Play music when the user returns to the tab
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        playAudio();
      }
    });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
      document.removeEventListener("visibilitychange", playAudio);
    };
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <audio ref={audioRef}>
        <source src="/Ramadan-Idents.mp3" type="audio/mp3" />
      </audio>
      <Image
        className="object-cover object-top"
        src={ramadanImage}
        alt="RamadanWindow"
        fill
        placeholder="blur"
        quality={100}
      />

      <div className=" w-full h-[50%] relative z-10 flex flex-col justify-center items-center text-white">
        <div className="w-full h-[10%] flex justify-center items-center">
          <Image
            src={"/white_hand.gif"}
            alt="white-Hand"
            width={50}
            height={50}
          />
        </div>

        <h1 className="font-cairo  text-6xl md:text-8xl lg:tx-8xl mb-10 tracking-tight animate-slideIn  ">
          رمضان كريم
        </h1>
        <h2 className="leading-relaxed font-reem  text-4xl md:text-7xl lg:tx-7xl mb-10 tracking-tight  ">
          وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ
        </h2>
        <Link
          href="/home"
          className="bg-white/10 font-cairo transition-all duration-300 hover:px-[3vw] text-xl  px-[2vw] py-[2vh] rounded-lg border border-gray-300"
        >
          أوقات الصلاة
        </Link>
      </div>
    </main>
  );
}
