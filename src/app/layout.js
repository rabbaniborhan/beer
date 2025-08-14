import Toaster from "@/components/Toaster";
import { UserProvider } from "@/Providers/UserProvider/UserContext";
import "./globals.css";

export const metadata = {
  title: "Brew Haven - Premium Beers Online",
  description:
    "Discover, explore, and buy premium beers from around the world. Fast delivery, quality brews, and exclusive offers just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
