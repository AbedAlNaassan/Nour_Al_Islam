import React from "react";

export default function PrayerTimes({ adhan, time }) {
  return (
    <div className="h-[10%] w-[90%] text-xl text-white border-b border-white  flex justify-between items-center">
      <p>
        {time}
      </p>

      <p>
        {adhan}
      </p>
    </div>
  );
}
