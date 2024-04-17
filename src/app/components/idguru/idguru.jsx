'use client'
import { supabase } from "@/app/config/supabase";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Duivion from "../../../../public/Duivion.png";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Card, CardHeader, CardBody, CardFooter, Box,
 Button, Heading,Stat,
 StatLabel,
 StatNumber,
 StatHelpText,
 StatArrow, Divider,
 StatGroup,
  Stack, Flex, StackDivider, ButtonGroup, /*Image,*/
Text } from '@chakra-ui/react'
import PenaGuru from "../../../../public/PenaGuru.png"
export default function IdGuru() {
  const [absensi, setAbsensi] = useState([]);
  const { tanggal, namaguru } = useParams();

  useEffect(() => {
    async function fetchAbsensi() {
      try {
        const decodedTanggal = decodeURIComponent(tanggal);
        
        if (!decodedTanggal || !namaguru) return;

        const { data: absensiData, error } = await supabase
          .from("absensi")
          .select(`
          *,
          profiles:id_guru(nama_user)
        `)
          .eq("tanggal_absensi", decodedTanggal.replace(' ', '+'))
          .eq("id_guru", namaguru);

        if (error) {
          throw error;
        }

        setAbsensi(absensiData);
        for (const absen of absensiData){
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
        console.error("Error fetching absensi:", error.message);
      }
    }

    fetchAbsensi();
  }, [tanggal, namaguru]);
  return (
    <>
      <div className="mb-80">
      {absensi.map((absen) => (
        <div key={absen.id}>
          
        <Card className="h-full">
          <CardHeader className="items-center justify-items-center text-center">
           <Image
                  src={PenaGuru}
                  width={45}
                  height={45}
                  className="float-left"
                  /> 
                   <Heading size="lg">LAPORAN ABSEN</Heading>
          </CardHeader>
                   <Divider/>

          <CardBody>
            <Stack spacing="4">
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box className="space-between">
                    <Heading size="xs" textTransform="uppercase">
                      Keterangan Guru
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Nama Guru: {absen.profiles.nama_user}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      Id Guru: {absen.id_guru}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Box className="items-center mx-auto justify-items-center text-center">
              {absen.foto_kegiatan_url && (
                <Image
                  src={absen.foto_kegiatan_url}
                  width={250}
                  height={150}
                  className="items-center justify-items-center text-center "
                />
              )}
              </Box>
              <Stack spacing="4">
                <div className="mx-auto flex-end-component">
                  <Box>
                    <Stat>
                      <StatLabel>Check In</StatLabel>
                      <StatNumber fontSize="medium">
                        {absen.check_in}
                      </StatNumber>
                    </Stat>
                  </Box>
                  <Box>
                    <Stat>
                      <StatLabel>Check Out</StatLabel>
                      <StatNumber fontSize="medium">
                        {absen.check_out}
                      </StatNumber>
                      <StatLabel>Tanggal</StatLabel>
                      <StatHelpText>{absen.tanggal_absensi}</StatHelpText>
                    </Stat>
                  </Box>
                   
                </div>
           <Box>
                <Image
                  src={Duivion}
                  width={90}
                  height={90}
                  className="float-right"
                  />
                  </Box>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        </div>
      ))}
      </div>
    </>
  );
}
