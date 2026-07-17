"use client";

import { useEffect, useState } from "react";


interface MatchCountdownProps {
  date: string;
  time: string;
}


function calculateTimeRemaining(targetDate: Date) {

  const now = new Date();

  const difference = targetDate.getTime() - now.getTime();


  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }


  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),

    expired: false,
  };
}



export default function MatchCountdown({
  date,
  time,
}: MatchCountdownProps) {


  const targetDate = new Date(
    `${date}T${time}`
  );


  const [remaining, setRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );



  useEffect(() => {

    const interval = setInterval(() => {

      setRemaining(
        calculateTimeRemaining(targetDate)
      );

    }, 1000);



    return () => clearInterval(interval);

  }, [targetDate]);




  if (remaining.expired) {

    return (
      <div className="text-center">

        <p className="text-lg font-semibold text-gray-900">
          Match Started
        </p>

      </div>
    );

  }



  return (
    <div className="grid grid-cols-4 gap-3 text-center">


      <div className="rounded-lg bg-gray-100 p-3">

        <span className="block text-2xl font-bold text-gray-900">
          {remaining.days}
        </span>

        <span className="text-xs text-gray-500">
          Days
        </span>

      </div>



      <div className="rounded-lg bg-gray-100 p-3">

        <span className="block text-2xl font-bold text-gray-900">
          {remaining.hours}
        </span>

        <span className="text-xs text-gray-500">
          Hours
        </span>

      </div>



      <div className="rounded-lg bg-gray-100 p-3">

        <span className="block text-2xl font-bold text-gray-900">
          {remaining.minutes}
        </span>

        <span className="text-xs text-gray-500">
          Minutes
        </span>

      </div>



      <div className="rounded-lg bg-gray-100 p-3">

        <span className="block text-2xl font-bold text-gray-900">
          {remaining.seconds}
        </span>

        <span className="text-xs text-gray-500">
          Seconds
        </span>

      </div>


    </div>
  );
}