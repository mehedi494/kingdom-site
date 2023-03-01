import React, { useState, useEffect } from "react";
//import next hoc
import Image from "next/image";
import Link from "next/link";
// import react icons
import { CgMenuLeftAlt } from "react-icons/cg";
// imports image
import logo from "../img/logo.png";
// imports MT
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Select,
  Option,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  const [openNav, setOpenNav] = useState(true);

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href={"/aboutus"} className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Menu>
          <MenuHandler>
            <Button
              ripple={false}
              className=" capitalize  px-0 font-normal hover:shadow-none shadow-none text-[1rem] text-white bg-transparent flex     items-center  "
            >
              Get Involved
              <IoIosArrowDown className="text-[1rem] text-white  " />
            </Button>
          </MenuHandler>
          <MenuList>
            <Link href={"/membership_applicationt"}>
              <MenuItem className=" outline-none text-[.9rem] first-line:border-none text-primary hover:text-primary active:text-primary overflow-hidden">
                Membership
              </MenuItem>
            </Link>

            <Link href={"/volunteer"}>
              <MenuItem className=" outline-none text-[.9rem] first-line:border-none text-primary hover:text-primary active:text-primary">
                Volunteer
              </MenuItem>
            </Link>
            <Link href={"/vendor"}>
              <MenuItem className=" outline-none text-[.9rem] first-line:border-none text-primary hover:text-primary active:text-primary">
                Vendor
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>

        {/* <a href="#" className="flex items-center">
          Get Involved
        </a> */}
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href={`/project`} className="flex items-center">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href={`/invest`} className="flex items-center">
          Invest
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href={`/donation`} className="flex items-center">
          Donation
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        color="white"
        className="p-1 font-normal"
      >
        <Link href={`/contact`} className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <section className="navbar  absolute top-0  z-50 w-[100%]">
      <Navbar
        className="mx-auto  max-w-[100%]
        backdrop-blur-none 
         bg-opacity-100
        py-1
           px-4 lg:px-8 
            shadow-none
            
            bg-[#00000060]

           outline-0 border-none rounded-none"
      >
        <div className="container shadow-none max-w-[96%]  mx-auto flex items-center justify-between  text-white">
          <div className=" logo__box flex  items-center  space-x-6">
            <div>
              <span className="  rounded-full p-2   ">
                <CgMenuLeftAlt className=" border-solid hover:border-[1px] border-primary text-[3.2rem] cursor-pointer bg-[#8484842c] rounded-full p-2 transition-all" />
              </span>
            </div>
            <Link href={"/"}>
              <Image src={logo} width={50} height={50} alt="logo" />
            </Link>
          </div>

          <div className="hidden lg:block ">{navList}</div>

          <div>
            <Select label="Select Languege" className="text-white" error>
              <Option>English</Option>
              <Option>Franch</Option>
            </Select>
          </div>
        </div>
        {/* <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </div>
        </MobileNav> */}
      </Navbar>
    </section>
  );
}

// bg-[#00000060]
