import React, { useEffect, useState } from 'react';
import Display from './Display';

export default function Calculator() {
  const [value, setValue] = useState("");

const allButtons = [
  { label: "AC", color: "bg-gray-200 text-black" },
  { label: "DEL", color: "bg-gray-200 text-black" },
  { label: "%", color: "bg-gray-200 text-black" },
  { label: "/", color: "bg-orange-500 text-white" },
  { label: "7", color: "bg-white text-gray-800" },
  { label: "8", color: "bg-white text-gray-800" },
  { label: "9", color: "bg-white text-gray-800" },
  { label: "*", color: "bg-orange-500 text-white" },
  { label: "4", color: "bg-white text-gray-800" },
  { label: "5", color: "bg-white text-gray-800" },
  { label: "6", color: "bg-white text-gray-800" },
  { label: "-", color: "bg-orange-500 text-white" },
  { label: "1", color: "bg-white text-gray-800" },
  { label: "2", color: "bg-white text-gray-800" },
  { label: "3", color: "bg-white text-gray-800" },
  { label: "+", color: "bg-orange-500 text-white" },
  { label: "0", color: "bg-white text-gray-800 col-span-2" },
  { label: ".", color: "bg-white text-gray-800" },
  { label: "=", color: "bg-orange-500 text-white" },
];
  const onClear = () => {
    setValue('');
  };

 const handleButtonClick = (label) => {

if (label === "DEL") {
    setValue(prev => prev.slice(0, -1));
    return;
}

  if (label === "=") {
    try {
      const result = eval(value);
      
      if (result === Infinity || isNaN(result)) {
        setValue("Error");
      } else {
        setValue(result.toString());
      }
    } catch {
      setValue("Error");
    }
  } else {
    setValue(prev => prev + label);
  }
};


useEffect(() => {
  const handleKeyDown = (e) => {    
    if (/[0-9+\-*/.]/.test(e.key)) {
      setValue(prev => prev + e.key);
    } else if (e.key === "Enter") {
      handleButtonClick("=");
    } else if (e.key === "Backspace") {
      handleButtonClick("DEL");
    } else if (e.key === "Escape") {
      onClear();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [value]);
return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div className="w-full max-w-[340px] bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-gray-400">
      
      <Display value={value} />

      <div className="grid grid-cols-4 gap-3">
        {allButtons.map((btn, index) => (
          <button
            key={index}
            onClick={() => btn.label === "AC" ? onClear() : handleButtonClick(btn.label)}
            className={`h-16 rounded-2xl text-xl font-medium transition-all active:scale-95 shadow-sm
              ${btn.label === "0" ? "col-span-2" : ""} 
              ${btn.color}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);
}