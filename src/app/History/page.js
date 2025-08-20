"use client";
import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currency-history") || "[]");
    setHistory(data.reverse());
  }, []);

  return (
    
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Conversion History</h2>
      {history.length === 0 ? (
        <div className="text-gray-500">No conversions yet.</div>
      ) : (
        <ul className="divide-y">
          {history.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between text-gray-700">
              <span>
                {item.amount} {item.from} → {item.to}
              </span>
              <span className="font-bold text-indigo-700">{item.result}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}