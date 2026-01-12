import Link from "next/link";
import { FaUsers, FaChartLine, FaRocket } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
 <>
 <main className="max-w-7xl mx-auto px-4 py-6">
      <Navbar />
      <Hero />
      <Footer/>
    </main>

 </>
  );
}
