import React, { useState, useEffect } from "react";
import Style from "../styles/styles.module.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
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
  const [openNav, setOpenNav] = useState(false);

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
    <>
      <div className="navbar  w-[100%]   z-[999] bg-[#0000001a] ">
        <Navbar
          className="mx-auto max-w-[100%] backdrop-blur-none bg-opacity-100 py-0 px-4 lg:px-8 shadow-none bg-[#00000060] outline-0 border-none
        rounded-none"
        />
        <div className="container shadow-none max-w-[96%]  mx-auto flex items-center justify-between  text-white">
          <div className=" logo__box flex  items-center  space-x-6">
            <div>
              <span
                className="  rounded-full p-2   "
                onClick={() => {
                  setOpenNav(true);
                }}
              >
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
      </div>

      <div
        className={`mobile__menu  w-[100%]    overflow-hidden h-[100%]  top-0 left-0  bg-black  fixed ${
          openNav ? "block" : "hidden"
        }  transition-all    duration-500 z-[9999]`}
      >
        <div className="menu_wrapper p-10 text-white">
          <RxCross2
            className=" text-[1.5rem] cursor-pointer"
            onClick={() => setOpenNav(false)}
          />
          <ul className="  capitalize  flex flex-col space-y-4 mt-6 ml-5">
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] text-[#CB9833] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/"}> Home</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/aboutus"}>About</Link>
            </li>
            <li
              className={`font-bold lg:text-[2.5rem] text-[1.5rem]  hover:translate-x-4  hover:opacity-70 transition-all ${Style.child_nav} duration-300 relative text-[#CB9833] flex  items-center  `}
            >
              Get <br />
              Involved{" "}
              <AiOutlinePlus className=" ml-[1rem] text-white text-[1.5rem]" />
              <ul className=" ml-[10rem] translate-y-[6rem]   opacity-0 transition-all  delay-[80ms]  text-[1rem] lg:text-[2.5rem] absolute top-0 lg:left-[8%] left-[10%] text-white">
                <li>
                  <Link href={"/membership_applicationt"}>Membership</Link>
                </li>
                <li>
                  <Link href={"/volunteer"}>Volunteer</Link>
                </li>
                <li>
                  <Link href={"/vendor"}>Vendor</Link>
                </li>
              </ul>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/project"}>Projects</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/invest"}>Invest</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"/donation"}>Donation</Link>
            </li>
            <li className=" font-bold lg:text-[2.5rem] text-[1.5rem] hover:translate-x-4  hover:opacity-70 transition-all duration-300">
              <Link href={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// bg-[#00000060]
