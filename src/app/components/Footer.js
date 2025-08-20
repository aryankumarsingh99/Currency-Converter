import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white bg-opacity-80 text-center text-gray-500 text-sm mt-8 flex flex-col items-center gap-2">
      <div className="flex gap-4 justify-center mb-2">
        <Link
          href="https://github.com/aryansingh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl hover:text-indigo-600 transition" />
        </Link>
        <Link
          href="https://linkedin.com/in/aryansingh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl hover:text-indigo-600 transition" />
        </Link>
        <Link
          href="https://aryansingh.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          <FaGlobe className="text-xl hover:text-indigo-600 transition" />
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Aryan Singh. All rights reserved.
      </div>
      <div className="text-xs text-gray-400">
        Built with{" "}
        <span className="text-indigo-600 font-semibold">Next.js</span> &amp;{" "}
        <span className="text-blue-600 font-semibold">Tailwind CSS</span>
      </div>
    </footer>
  );
}