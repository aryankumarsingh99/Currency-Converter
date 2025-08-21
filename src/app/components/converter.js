"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CURRENCY_API = "https://api.exchangerate-api.com/v4/latest/";

export default function Converter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch currency list and rates
  useEffect(() => {
    setLoading(true);
    fetch(CURRENCY_API + from)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
        setRates(data.rates);
        setLoading(false);
      });
  }, [from]);

  // Convert currency
  useEffect(() => {
    if (rates && rates[to]) {
      const res = (amount * rates[to]).toFixed(4);
      setResult(res);
      // Save to history
      if (amount && from && to && from !== to) {
        const history = JSON.parse(localStorage.getItem("currency-history") || "[]");
        history.push({ amount, from, to, result: res, date: new Date().toISOString() });
        localStorage.setItem("currency-history", JSON.stringify(history.slice(-10))); // keep last 10
      }
    }
  }, [amount, to, rates]);

  // Swap currencies
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-100 rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center border border-indigo-100"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <h2 className="text-4xl font-black text-center mb-8 text-indigo-700 tracking-tight drop-shadow-lg">
        💱 Currency Converter
      </h2>
      <form
        onSubmit={e => e.preventDefault()}
        className="flex flex-col gap-8 w-full"
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-semibold text-indigo-700">From</label>
            <select
              value={from}
              onChange={e => setFrom(e.target.value)}
              className="border-2 border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 text-lg font-semibold transition"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center justify-end">
            <button
              type="button"
              onClick={handleSwap}
              className="bg-gradient-to-tr from-indigo-500 to-blue-400 hover:from-indigo-600 hover:to-blue-500 text-white rounded-full p-3 shadow-lg transition-transform active:scale-90 mt-7 flex items-center justify-center"
              title="Swap"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 17v2a2 2 0 0 0 2 2h16M20 7V5a2 2 0 0 0-2-2H6M7 8l-3 3 3 3M17 16l3-3-3-3"/>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-semibold text-indigo-700">To</label>
            <select
              value={to}
              onChange={e => setTo(e.target.value)}
              className="border-2 border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 text-lg font-semibold transition"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-indigo-700">Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="border-2 border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/80 text-lg font-semibold transition"
            placeholder="Enter amount"
          />
        </div>
      </form>
      <div className="mt-10 text-center w-full">
        {loading ? (
          <span className="text-indigo-500 font-semibold text-lg">Loading rates...</span>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-indigo-700">
              {amount} {from} ={" "}
              <span className="text-4xl text-blue-700 font-extrabold">
                {result ? result : "--"}
              </span>{" "}
              {to}
            </span>
            <div className="mt-2 text-xs text-gray-400">
              Rates powered by exchangerate-api.com
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}