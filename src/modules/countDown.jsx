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

  const birthYear = 2025;
  const birthMonth = 4;
  const birthDay = 28;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      let targetDate = new Date(currentYear, birthMonth, birthDay, 0, 0, 0);
      let calculatedAge = currentYear - birthYear;

      if (now < targetDate) {
        calculatedAge = calculatedAge - 1;
      } else {
        targetDate = new Date(currentYear + 1, birthMonth, birthDay, 0, 0, 0);
      }

      setAge(calculatedAge);

      const difference = targetDate - now;

      const months = targetDate.getMonth() - now.getMonth() +
        (12 * (targetDate.getFullYear() - now.getFullYear()));

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

  const units = [
    { value: timeLeft.months, label: 'Months' },
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <>
      <div className="countdown-scroll">
        {/* Title */}
        <div className="countdown-title-row">
          <span className="star">✦</span>
          <h3 className="text-l md:text-2xl font-semibold text-center" style={{ color: '#3b2f1e' }}>
            Days Before I Turn {age + 1}
          </h3>
          <span className="star">✦</span>
        </div>

        {/* Crown divider */}
        <div className="countdown-crown-divider">
          <span className="text-base leading-none">👑</span>
        </div>

        {/* Time unit cards */}
        <div className="countdown-units">
          {units.map((unit, i) => (
            <React.Fragment key={unit.label}>
              <div className="countdown-unit">
                <div className="countdown-unit-value">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="countdown-unit-label">{unit.label}</div>
              </div>
              {i < units.length - 1 && (
                <span className="countdown-separator">:</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}