import "./globals.css";
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
