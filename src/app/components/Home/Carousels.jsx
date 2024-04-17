"use client";
import React from "react";
import { Carousel } from "antd";
import BG from "../../../../public/Bg.png";
import Image from "next/image";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Carousels = () => (
  <><div className="items-center justify-center mx-auto w-full mt-6">

  <Carousel autoplay autoplaySpeed={3000} >
    <div >
        <Image src={BG}   alt="" />
    </div>
    <div>
      <Image src={BG} alt="" />
    </div>
  </Carousel>
  </div>
  </>
);
export default Carousels;
