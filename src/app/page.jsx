import Image from "next/image";
import Link from "next/link";
import "./styles/globals.css";
import ramadanImage from "../../public/ramadanWallpaper.jpg";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <Image
        className="object-cover object-top"
        src={ramadanImage}
        alt="RamadanWindow"
        fill
        placeholder="blur"
        quality={100}
      />

      <div />

      <div className=" relative z-10 text-center text-white">
        <h1 className="font-cairo animate-slideIn text-8xl mb-10 tracking-tight font-normal ">
          رمضان كريم
        </h1>
        <h2 className="leading-relaxed font-reem text-7xl   mb-10 tracking-tight font-normal ">
          وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ
        </h2>
        <Link
          href="/home"
          className="bg-white/10 font-cairo transition-all duration-300 hover:px-[3vw] text-xl px-[2vw] py-[2vh] rounded-lg border border-gray-300"
        >
          أوقات الصلاة
        </Link>
      </div>
    </main>
  );
}
