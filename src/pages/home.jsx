"use client";
import Header from "@/app/components/Header";
import React, { useEffect } from "react";
import "../app/styles/globals.css";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import { getPrayerTimes } from "../app/utils/prayerTimesAPI";
import PrayerTimes from "@/app/components/PrayerTimes";
import Image from "next/image";

export default function Home() {
  const [prayerTimes, setPrayerTimes] = useState({});

  const [selectedCity, setSelectedCity] = useState("Tripoli");

  const cities = [
    { name: "Tripoli/طرابلس", value: "Tripoli" },
    { name: "Beirut/بيروت", value: "Beirut" },
    { name: "Sidon/صيدا", value: "Sidon" },
    { name: "Tyre/صور", value: "Tyre" },
    { name: "Baalbek/بعلبك", value: "Baalbek" }
  ];

  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getPrayerTimes(selectedCity);
        console.log(data);
        if (data) setPrayerTimes(data);
      };

      fetchData();
    },
    [selectedCity]
  );

  const formatTimes = time => {
    if (!time) {
      return "00:00";
    }

    let [hours, minutes] = time.split(":").map(Number); // Change 'const' to 'let' for 'hours'

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10
      ? "0" + minutes
      : minutes} ${period}`;
  };

  return (
    <div className="m-0 p-0 w-[100vw] h-[100vh] font-cairo ">
      <Header />

      <section className="w-full h-[75%] lg bg-customBlueDarker lg:bg-[url('/ramadanWallpaper.jpg')] bg-cover bg-center ">
        <div className="w-full h-[15%] flex justify-around lg:hidden">
          <Image src="/oil-lamp.png" alt="Oil Lamp" width={100} height={100} />
          <Image src="/mosque.png" alt="Oil Lamp" width={100} height={100} />
          <Image src="/oil-lamp.png" alt="Oil Lamp" width={100} height={100} />
        </div>
        <div className="w-full h-[90%]  lg:h-[85%]  flex justify-center items-center ">
          <div className="w-[65%] h-[70%]  border border-white rounded-lg  shadow-lg shadow-gray-600 flex flex-col items-center justify-around gap-1 bg-customBlueDarker/50 ">
            <div className="w-[90%] h-[20%]  border-b border-white flex justify-end items-end ">
              <select
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                className="bg-transparent text-lg text-white outline-none"
              >
                {cities.map((city, index) =>
                  <option
                    key={index}
                    value={city.value}
                    className="bg-customBlue"
                  >
                    {city.name}
                  </option>
                )}
              </select>
            </div>
            <PrayerTimes
              adhan="Imsak/إمساك"
              time={formatTimes(prayerTimes.Imsak)}
            />
            <PrayerTimes
              adhan="Fajr/الفجر"
              time={formatTimes(prayerTimes.Fajr)}
            />
            <PrayerTimes
              adhan="Dohr/الظهر"
              time={formatTimes(prayerTimes.Dhuhr)}
            />
            <PrayerTimes
              adhan="Asr/العصر"
              time={formatTimes(prayerTimes.Asr)}
            />
            <PrayerTimes
              adhan="Maghrib/المغرب"
              time={formatTimes(prayerTimes.Maghrib)}
            />
            <PrayerTimes
              adhan="Isha/العشاء"
              time={formatTimes(prayerTimes.Isha)}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
