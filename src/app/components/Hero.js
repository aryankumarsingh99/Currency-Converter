import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 py-12">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <Image
            src="/currency-hero.png"
            alt="Currency Exchange Illustration"
            width={220}
            height={120}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">
          Convert Currencies Instantly
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium bg-white/70 rounded-xl px-6 py-4 shadow">
          Get real-time exchange rates, track your conversion history, and explore
          more features with our smart currency converter. Enjoy a seamless,
          beautiful, and responsive experience across all your devices.
        </p>
      </motion.div>
    </section>
  );
}