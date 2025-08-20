export default function About() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">About</h2>
      <p className="text-gray-700 mb-2">
        This smart currency converter app lets you convert between currencies using live rates.
      </p>
      <p className="text-gray-700">
        Built with Next.js, React, and Tailwind CSS. Conversion history is saved locally in your browser.
      </p>
    </div>
  );
}