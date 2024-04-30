import { FooterLinksOne, FooterLinksTwo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-transparent relative z-40">
      <div className="h-full flex w-[90%] m-auto border-t-2 border-b-2 border-gray-1 ">
        <div className="w-3/5 mt-20 flex justify-start gap-10 xl:gap-40 mb-10">
          <div className="flex flex-col gap-6 ml-10 xl:ml-20">
            <h2
              className="uppercase font-semibold text-base xl:text-xl"
              style={{ fontFamily: "Amarante" }}
            >
              Company
            </h2>
            {FooterLinksOne.map((data) => (
              <Link
                className="text-sm xl:text-xl"
                style={{ fontFamily: "Open Sans" }}
                key={data.label}
                href={"#"}
              >
                {data.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className="uppercase font-semibold text-base xl:text-xl"
              style={{ fontFamily: "Amarante" }}
            >
              Support
            </h2>
            {FooterLinksTwo.map((data) => (
              <Link
                className="text-sm xl:text-xl"
                style={{ fontFamily: "Open Sans" }}
                key={data.label}
                href={"#"}
              >
                {data.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center mt-10 mb-10">
          <Image src={"/assets/logo.svg"} className="w-[200px] h-[100px] xl:w-[300px] xl:h-[100px]" width={0} height={0} alt="logo" />
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <FaLocationDot />
              <p className="w-[15rem] text-sm xl:text-base xl:w-[30rem]" style={{ fontFamily: "Open Sans" }}>
                eMoment India Pvt Ltd DCB-324, 3rd Floor, DLF Cybercity-
                Mindfire Solutions, Chandaka Industrial Estate, Patia,
                Bhubaneswar, Odisha 751024
              </p>
            </div>
            <div
              className="flex gap-6 items-center text-sm xl:text-base"
              style={{ fontFamily: "Open Sans" }}
            >
              <FaPhone />
              <p>+91 9337559575</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========pre footer ============= */}
      <div className="w-[90%] flex justify-between mt-3 m-auto">
        <p className="font-medium text-xs xl:text-sm text-gray-1" style={{ fontFamily: "Open Sans" }}>2024. All Rights Reserved</p>
        <p className="font-medium text-xs xl:text-sm text-gray-1" style={{ fontFamily: "Open Sans" }}>Terms & Conditions Privacy</p>
        <div className="flex gap-3 w-20 justify-between">
            <Link href={""}><FaFacebookF /></Link>
            <Link href={""}><AiFillInstagram /></Link>
            <Link href={""}><RiTwitterXFill /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
