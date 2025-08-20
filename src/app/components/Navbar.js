"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/converter", label: "Converter" },
    { href: "/history", label: "History" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-200 via-cyan-100 to-purple-100 shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto flex items-center gap-8 px-6 py-4">
        <Link href="/" className="flex items-center group">
          <span className="relative flex items-center">
            <motion.span
              className="absolute -inset-1 blur-lg opacity-70 group-hover:opacity-90 transition"
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <span className="block w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-200 to-purple-300"></span>
            </motion.span>
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image
                src="/name-logo.svg"
                alt="Logo"
                width={44}
                height={44}
                className="relative z-10"
                priority
              />
            </motion.div>
          </span>
          <motion.span
            className="ml-3 font-extrabold text-blue-700 text-xl tracking-wide drop-shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            SmartFX
          </motion.span>
        </Link>
        <div className="flex gap-6 ml-auto">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            >
              <Link
                href={link.href}
                className={`font-semibold px-4 py-2 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}