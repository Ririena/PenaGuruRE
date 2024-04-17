"use client";
import { useState } from "react";
import { RiStackFill } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaUserCheck } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import Directory from "./Directory";
import DrawerNav from "./DrawerNav";
import Draw from "./Draw";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const router = useRouter();
  const menuItems = [
    "me",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleSignUpClick = () => {
    router.push("/register");
  };

  const handleGuru = () => {
    router.push("/me/edit");
  };

  const handleStaff = () => {
    router.push("/me/editstaff");
  };

  const handleAdmin = () => {
    router.push("/me/editadmin");
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <>
 
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      > <Draw/>
     
        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand>
            <Link
              className="font-bold text-blue-500 cursor-pointer"
              onClick={handleHome}
            >
              PenaGuru
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <Link
              className="font-bold text-blue-500 cursor-pointer"
              onClick={handleHome}
            >
              PenaGuru
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link className="hover:text-lg hover:underline hover:cursor-pointer" href="/me" underline="">
              Presensi
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-lg hover:underline hover:cursor-pointer" href="/me/statistik" aria-current="page" underline="">
              Statistik
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="hover:text-lg hover:underline hover:cursor-pointer" color="purple" href="/contact" underline="">
              Contact Us
            </Link>
          </NavbarItem>
          
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              onClick={handleLoginClick}
              className="btn bg-dark"
              variant="shadow"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button className="btn bg-dark" href="#" variant="shadow">
                  Member
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  onClick={handleSignUpClick}
                  className="text-bold"
                  key="news"
                >
                  Buat Akun (Click Me)
                </DropdownItem>
                <DropdownItem
                  onClick={handleGuru}
                  key="new"
                  startContent={<FaUserCheck />}
                >
                  Edit Guru
                </DropdownItem>
                <DropdownItem
                  onClick={handleStaff}
                  key="copy"
                  startContent={<FaUserGear />}
                >
                  Edit Staffs
                </DropdownItem>
                <DropdownItem
                  onClick={handleAdmin}
                  key="edit"
                  startContent={<RiAdminLine />}
                >
                  Edit Admin
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "purple"
                }
                href={item}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        
      </Navbar>
     
    </>
  );
}
