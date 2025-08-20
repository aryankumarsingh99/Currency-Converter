import { FaExchangeAlt, FaHistory, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaExchangeAlt className="text-indigo-600 text-5xl mb-4 drop-shadow-lg" />,
    title: "Live Converter",
    desc: "Convert between 150+ currencies with up-to-date exchange rates.",
    color: "from-indigo-400 to-blue-300",
  },
  {
    icon: <FaHistory className="text-pink-600 text-5xl mb-4 drop-shadow-lg" />,
    title: "Conversion History",
    desc: "View your recent conversions for quick reference and tracking.",
    color: "from-pink-400 to-yellow-200",
  },
  {
    icon: <FaInfoCircle className="text-green-600 text-5xl mb-4 drop-shadow-lg" />,
    title: "About",
    desc: "Learn more about this app and how it helps you manage currency exchange.",
    color: "from-green-400 to-cyan-200",
  },
];

export default function Section() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 py-12">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Why Choose Smart Currency Converter?
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 w-full max-w-6xl">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`flex flex-col items-center bg-gradient-to-br ${f.color} rounded-3xl shadow-2xl p-10 w-80 transition-transform hover:scale-105 hover:shadow-indigo-300/40`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            {f.icon}
            <h3 className="font-extrabold text-2xl mb-2 text-white drop-shadow">{f.title}</h3>
            <p className="text-white/90 text-center text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}