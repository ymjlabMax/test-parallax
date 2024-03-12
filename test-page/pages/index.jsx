import Image from "next/image";
import { Inter } from "next/font/google";
import { MainBanner } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainBanner />
    </>
  );
}
