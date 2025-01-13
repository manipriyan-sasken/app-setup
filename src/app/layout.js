import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style.css";
import "../reset.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Re-Connected",
  description: "Internal app for Re",
};

const inter = Montserrat({ weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="dark">
        <Navbar />
        <div id="content" className="ml-20 p-3">
          {children}
        </div>
      </body>
    </html>
  );
}
