"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../../config/supabase";
import Image from "next/image";
import {
  Card,
  CardHeader,
  Box,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import UserAuth from "@/app/middleware/user";
export default function Statistik() {
  const [user, setUser] = useState(null);
  const [absensi, setAbsensi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          console.error("Error fetching user data:", error.message);
          return;
        }

        setUser(user);

        if (!user || !user.email) {
          console.error("User or user email is null or undefined.");
          return;
        }

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("email", user.email)
          .single();
        if (profileError) {
          console.error("Error fetching profile data:", profileError);
          return;
        }

        const guruId = profileData?.id;
        if (!guruId) {
          console.error("Guru ID is null or undefined.");
          return;
        }

        const { data: absensiData, error: absensiError } = await supabase
          .from("absensi")
          .select("*")
          .eq("id_guru", guruId)
          .order("tanggal_absensi", { ascending: false })
          // .limit(2);
        if (absensiError) {
          console.error("Error fetching absensi data:", absensiError);
          return;
        }

        setAbsensi(absensiData);

        for (const absen of absensiData) {
          const res = await supabase.storage
            .from("guru")
            .getPublicUrl(absen.foto_kegiatan);

          if (res.error) {
            console.error("Error fetching image URL:", res.error.message);
          } else {
            absen.foto_kegiatan_url = res.data.publicUrl;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, [user]);

  return (
    <>
    <UserAuth/>
<main className="container mx-auto px-4">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-4">
    <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-3 mb-8">
      <Card margin="4" className="">
        <CardHeader>
          <Heading size="md" className="text-center">
            PRELISENCE
          </Heading>
        </CardHeader>

        <CardBody>
          {absensi.map((absen, index) => (
            <div className="mb-4" key={index}>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Jam masuk
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {absen.check_in}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Jam keluar
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {absen.check_out}
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontSize="sm">
                    {absen.foto_kegiatan_url && (
                      <div className="">
                        <p>
                          <Image
                            width={500}
                            height={200}
                            src={absen.foto_kegiatan_url}
                            alt="Kegiatan"
                            className="object-contain"
                          />
                        </p>
                      </div>
                    )}
                  </Text>
                </Box>
              </Stack>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>

    <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1 mb-8">
      <Card>
        <CardBody>
          <Text>
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
      </Card>
    </div>
  </div>
</main>
    </>
  );
}
