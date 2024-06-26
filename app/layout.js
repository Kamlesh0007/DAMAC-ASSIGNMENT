import { Poppins } from "next/font/google";
import "./_styles/globals.css";
import Footer from "./_components/Footer";
// import Navbar from "./_components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DAMAC / A Real-Estate Projects",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
