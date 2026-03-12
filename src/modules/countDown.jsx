import React, { useState, useEffect } from 'react';

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [age, setAge] = useState(0);

  // Set birth year and birthday here
  const birthYear = 2025; // Change to actual birth year
  const birthMonth = 4; // 0=Jan, 1=Feb, ..., 11=Dec
  const birthDay = 28; // Day of month

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      let targetDate = new Date(currentYear, birthMonth, birthDay, 0, 0, 0);
      
      // Calculate age
      let calculatedAge = currentYear - birthYear;
      
      // If birthday hasn't happened yet this year
      if (now < targetDate) {
        calculatedAge = calculatedAge - 1;
      } else {
        // Birthday has passed, set target to next year
        targetDate = new Date(currentYear + 1, birthMonth, birthDay, 0, 0, 0);
      }
      
      setAge(calculatedAge);
      
      const difference = targetDate - now;
      
      // Calculate months
      const months = targetDate.getMonth() - now.getMonth() + 
                    (12 * (targetDate.getFullYear() - now.getFullYear()));
      
      // Create temp date to calculate remaining days
      const tempDate = new Date(now);
      tempDate.setMonth(tempDate.getMonth() + months);
      
      const days = Math.floor((targetDate - tempDate) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [birthYear, birthMonth, birthDay]);

  return (
    <>
        <h3 className='text-l md:text-2xl font-semibold'>Days Before I Turn {age + 1} </h3>
        <hr className="w-20 h-[2px] my-1 bg-gradient-to-r from-yellow-300 to-amber-500 border-none" />
        <h4 className='text-xl md:text-2xl font-meduim text-center'>{timeLeft.months} Months : {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds</h4>
    </>
  );
}
