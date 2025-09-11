import Script from "next/script";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Bridal Makeup Artist in Bankura | Kankana's Makeover",
  description:
    "Professional bridal, party, and photoshoot makeovers in Bankura, Durgapur, Barjora, Andal, Mejia, Illambazar and Asansol. Book your wedding look with Kankana's Makeover for flawless beauty.",
  keywords: [
    "bridal makeup artist Bankura",
    "party makeup Durgapur",
    "wedding makeover Asansol",
    "Bengali bridal makeup",
    "affordable makeup Illambazar",
    "reception hd makeup barjora",
  ],
  icons: {
    icon: "/assets/favicon.png", // path relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <ToastContainer position="top-center" autoClose={3000} />
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
