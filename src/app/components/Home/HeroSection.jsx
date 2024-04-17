import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Carousels from "./Carousels";
const HeroSection = () => {
  const router = useRouter();

  function handleAbsensei() {
    router.push("/me");
  }
  return (
    <>
      {/* <div class=" hero max-h-[1400px] bg-gray-50">
        <div class="hero-content text-center p-5">
          <div className="gap-1 grid grid-cols-1 sm:grid-cols-2">
            <div class=" text-center items-center justify-center">
              <h1 class="mb-2 mx-auto font-bold text-blue-500 mt-10 text-2xl sm:text-3xl">Mulai Harimu Dengan Absen Menggunakan Pena Guru</h1>
              <p class="mb-3 text-default-500 text-sm">
              Solusi Presensi Modern Untuk Pendidikan
              </p>
            <Button className="bg-blue-500 text-white mb-28 " onClick={handleAbsensei}>Mulai</Button>
            </div>

            <Carousels />
          </div>
        </div>
      </div> */}
      <div class=" hero max-h-[1400px]">

       <div className="hero-content bg-gray-50 p-5 grid justify-cente gap-1 grid-cols-1 sm:grid-cols-2">
              <div className="text-center text-neutral-content">
              <h1 class=" mb-3 mx-auto font-bold text-blue-500 mt-10 2 text-2xl sm:text-3xl">Mulai Harimu Dengan Absen Menggunakan Pena Guru</h1>
              <p class="mb-3 text-default-500 text-sm">
              Solusi Presensi Modern Untuk Pendidikan
              </p>
            <Button className="bg-blue-500 text-white  mb-28" onClick={handleAbsensei}>Mulai</Button>
              </div>
              <Carousels/>
              </div>
      </div>
    </>
  );
};

export default HeroSection;
