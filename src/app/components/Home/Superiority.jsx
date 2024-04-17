import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Image from "next/image";
import Duivion from "../../../../public/Duivion.png"
import { TbMessageQuestion } from "react-icons/tb";
import { Flex } from "@chakra-ui/react";
import { FaHistory, FaUserEdit, FaRegEdit } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Superiority() {
  const defaultContent = "Pena Guru Adalah Website Absensi Untuk Guru, Berisikan Bebereapa Fitur Yang Dapat serta Membantu Mempermudah Absensi Melalui Website"
   ;
   const siapa = "Website Pena Guru Dibuat Oleh Murid RPL 2 ...";
   const kenapa = "Pena Guru DiBuat Agar Menghemat waktu Dan Mempermudah Staf Maupun Siswa Agar Tidak Menghabiskan Waktu Dengan Mencatat Dan Melaporkan Kehadiran";
  return (
    <>
      <main className="pb-96">
        {/* <div>
         
          <section>
            <div className=" m-3 ">
              <section className="m-5">
                <p className="text-sm uppercase text-slate-500">Project Kami</p>
                <h1 className="text-lg first-letter:uppercase font-bold text-slate-700">
                  Program Aplikasi Sekolah
                </h1>
                <h2 className="text-lg first-letter:uppercase font-bold text-slate-700">
                  Sesuai Kebutuhan Guru
                </h2>
              </section>
            </div>
           
            <div className=" m-12">
              <section className="grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8afsM4GuidyDmcYvxdeGCLRpreZlZOxXzj90X8jURUg&s"></img>
                <p className="mt-9">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis cupiditate, sunt facere maxime repudiandae odio
                </p>
              </section>
            </div>
          </section>
        </div> */}
        <h1 className="text-center text-xl font-bold text-blue-500 mt-10">
          Fitur Absensi
        </h1>
        <div className="grid p-2 gap-4 justify-center mx-1 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  ">
          <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <SlPicture size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">Gambar</p>
                </Flex>
              </Flex>
            </CardHeader>
            <small className="text-default-500 text-lg px-4">
              Absensi Menggunakan Gambar Sebagai Salah Satu Syarat Absensi Yang
              Valid
            </small>
          </Card>
          <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <FaHistory size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">History</p>
                </Flex>
              </Flex>
            </CardHeader>
            <small className="text-default-500 text-lg px-4">
              Anda Dapat Melihat Riwayat Absensi Yang Sudah Dilakukan
            </small>
          </Card>
          <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <IoMdNotificationsOutline size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">Notifikasi</p>
                </Flex>
              </Flex>
            </CardHeader>
            <p className="text-default-500 text-lg px-4">
              Membantu Mengingatkan Anda Jika Belum Absen(/me)
            </p>
          </Card>
        </div>
        <h1 className="text-center text-xl font-bold text-blue-500 mt-10">
          Fitur Lainnya
        </h1>
        <div className="grid p-2 gap-4 justify-center items-center mx-1 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  ">
        <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <FaRegEdit size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">Edit</p>
                </Flex>
              </Flex>
            </CardHeader>
            <small className="text-default-500 text-lg px-4">
              Mengubah/Menambah Info Profil Seperti Nama, Alamat Dan Nomor
              Telepon
            </small>
          </Card>
          <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <FaUserEdit size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">Foto Profile</p>
                </Flex>
              </Flex>
            </CardHeader>
            <p className="text-default-500 text-lg px-4">
              Selain Mengubah Info Profil Anda Juga Dapat Mengubah foto Profile
            </p>
          </Card>
          <Card className="max-w-[400px] h-40">
            <CardHeader className="overflow-visible pt-4 px-4">
              <Flex spacing="4">
                <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
                  <div className="avatar item-center justify-center text-center">
                    <div class="avatar placeholder ">
                      <div class="bg-blue-500 text-white rounded-full w-12">
                        <span className="">
                          <TbMessageQuestion size="1.5em" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-bold">Contact Us</p>
                </Flex>
              </Flex>
            </CardHeader>
            <p className="text-default-500 text-lg px-4">
              Anda Dapat Menghubungi Kami Jika Menemukan Bug
            </p>
          </Card>
        </div>
        <div className="mt-10 justify-center p-10">
         
            <div className="hero-content rounded-lg bg-gray-50 p-5 grid justify-cente sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
              <div>
              <p className="text-2xl text-blue-500 font-bold text-center">
                Ingin Tahu Tentang 
              </p>
              <p className="text-2xl text-blue-500 font-bold text-center">Pena Guru Lebih Lanjut?</p>

              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Apa Itu Pena Guru?"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Siapa Yang Membuat Pena Guru?"
                >
                  {siapa}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Kenapa Pena Guru Dibuat?"
                >
                  {kenapa}
                </AccordionItem>
              </Accordion>
            </div>
           
          </div>
          <div className="hero-content rounded-lg p-5 grid justify-cente sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
              <div>
              <p className=" text-3xl sm:text-4xl text-blue-500 font-bold text-center">Dipersembahkan Oleh</p>

              </div>
<Image src={Duivion} className=" text-center items-center mx-auto w-32 sm:w-64"/>
              </div>
      </main>
    </>
  );
}
