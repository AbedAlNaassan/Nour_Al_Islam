"use client";

import React, { useEffect, useState } from "react";
import { getDate } from "../utils/prayerTimesAPI";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showFisrtDate, setShowFisrtDate] = useState(true);
  const [dates, setDates] = useState({ hijri: "", gregorian: "" });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDate();
      setDates({
        hijri: data.hijri.date,
        gregorian: data.gregorian.date
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFisrtDate(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full h-[15%] text-white text-lg font-cairo bg-customBlue">
      <div className="w-full h-[40%] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={showFisrtDate ? dates.hijri : dates.gregorian}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-xl"
          >
            {showFisrtDate
              ? `${dates.hijri} : Hijri/هجري`
              : `${dates.gregorian} : gregorian/ميلادي`}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="w-full h-[60%] flex justify-center items-center">
        <div className="w-full flex h-full justify-around items-center text-sm sm:text-lg lg:text-lg lg:w-[40%]">
          اللهم صلِّ وسلم وبارك على سيدنا محمد وعلى آله وصحبه أجمعين
        </div>
      </div>
    </header>
  );
}
