"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  IconButton,
  Avatar,
  Heading,
  Text,
  Input,
  Stack,
  Grid,
  BsThreeDotsVertical,
  Image,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
export default function Email() {
  return (
    <div className="mb-96">
      <div className="flex-1 p-4">
        <div className="mb-1 text-center">
          <h1 className="text-2xl font-semibold mb-2 text-center text-blue-500">
            Kontak masuk
          </h1>
        </div>
      </div>
      <div className="">
        <Card className="w-full">
          <CardHeader className="border-1 border-gray-200 bg-gray-100">
            <Flex spacing="4">
              <Flex flex="1" gap="2" alignItems="start" flexWrap="wrap">
                <div className="justify-start items-start">
                  <div className="avatar placeholder ">
                    <div className="bg-blue-600 text-white rounded-full w-12">
                      <span class="text-lg">U</span>
                    </div>
                  </div>
                </div>
                <Box>
                <p className="font-bold sm: text-sm md:text-sm lg:text-md xl:text-md ">
                    Rizky rofiul mutaqin
                  </p>
                  <p className=" sm: text-xs md:text-xs lg:text-sm xl:text-sm ">
                    wande@gmail.com
                  </p>
                </Box>
              </Flex>
              <div className="justify-end">
                <p className=" sm: text-xs md:text-xs lg:text-sm xl:text-sm ">
                  14/4/2024
                </p>
              </div>
            </Flex>
          </CardHeader>
          <CardBody className="bg-gray-50">
            <p className="sm: text-sm md:text-sm lg:text-sm xl:text-sm">
              masukan keluhan anda Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eaque libero minima ea. Optio assumenda,
              voluptatibus eum deserunt mollitia quaerat dolore neque cumque
              sunt. Iusto, quia quam? Similique pariatur doloremque ipsam
              suscipit dolorum deleniti officiis numquam rem facilis, aperiam
              aliquid repudiandae. Doloribus, error culpa eum maxime repellat
              excepturi nostrum quo iusto!
            </p>
          </CardBody>
        </Card>
        {/* <Card className="w-full">
          <CardHeader className="border-1 border-gray-200 bg-gray-100 cursor-pointer">
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="start" flexWrap="wrap">
                <div className="justify-start items-start">
                  <div className="avatar placeholder ">
                    <div className="bg-blue-600 text-white rounded-full w-12 ">
                      <span class="text-lg">U</span>
                    </div>
                  </div>
                </div>
                <Box>
                  <Heading size="sm" justify="start" items="start">
                    wawan Adebayo
                  </Heading>
                  <Text fontSize="sm">anggap aja judul </Text>
                </Box>
              </Flex>
              <Text fontSize="xs" justify="end" items="end">
                14/4/2024
              </Text>
            </Flex>
          </CardHeader>
        </Card> */}
      </div>
    </div>
  );
}
