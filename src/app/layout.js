import { Montserrat } from "next/font/google"

import "./globals.css";
import "../reset.css"


export const metadata = {
  title: "Re-Connected",
  description: "Internal app for Re",
};

const inter = Montserrat({ weight: '400' })


export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
