import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Download All Your Trading Documents And Softwares- Tradejini",
  description: "Discover the comprehensive suite of trading platforms and tools available for download at Tradejini. Download now and embark on your journey towards successful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
  
      {children}
      
      </body>
    </html>
  );
}
