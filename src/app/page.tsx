import { HomeIcon } from "lucide-react";
import { Play } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import Swiper from "swiper/bundle";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Section />
        </div>
        <Footer />
      </main>
    </div>
  );
}
