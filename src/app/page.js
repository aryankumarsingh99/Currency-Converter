"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Converter from "./components/converter";

export default function Home() {
  return (
    <>
      <div className="min-h-screen pt-20 flex flex-col bg-gradient-to-br from-indigo-100 via-blue-800 to-purple-300">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main Content: Hero + Converter side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 pt-12 pb-8 w-full max-w-7xl mx-auto">
          {/* Left: Hero Section */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                className="relative mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              >
                <span className="absolute -inset-2 blur-lg opacity-60">
                  <span className="block w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-400 via-indigo-200 to-blue-400 animate-pulse"></span>
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-white text-center lg:text-left mb-2 drop-shadow"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Welcome to Smart Currency Converter
              </motion.h1>
              <motion.p
                className="text-gray-300 text-center lg:text-left max-w-xl mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Instantly convert currencies, view your conversion history, and
                explore more features with our smart currency converter.
              </motion.p>
            </div>
            {/* Hero Illustration with Unsplash image */}
            <motion.div
              className="w-full flex justify-center lg:justify-start mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            ></motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link
                href=""
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg text-center transition shadow"
              >
                Start Converting
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right: Converter */}
          <motion.div
            className="flex-1 flex justify-center items-center w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Converter />
          </motion.div>
        </div>

        {/* Smart Features Section */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Section />
      </motion.div>

      {/* Additional Hero/Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Hero />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}
