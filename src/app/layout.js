import Toaster from "@/components/Toaster";
import { UserProvider } from "@/Providers/UserProvider/UserContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brew Haven - Premium Beers Online",
  description:
    "Discover, explore, and buy premium beers from around the world. Fast delivery, quality brews, and exclusive offers just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
