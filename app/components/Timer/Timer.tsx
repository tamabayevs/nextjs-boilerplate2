'use client';

import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds <= 0) return;
    
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="text-sm text-center my-4">
      Таймер на {seconds} секунд отчитывается
    </div>
  );
}; 