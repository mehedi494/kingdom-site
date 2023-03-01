import React, { useState } from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_1.jpg";
import s2 from "../../img/slider/slider_1.jpg";
import s3 from "../../img/slider/slider_1.jpg";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FutureGoverning() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[3rem]">
        <div
          className={` 
             slider
          py-4
    
          px-10
        
        `}
        >
          <Image src={s1} height={800} width={800} alt="slider image" />
        </div>

        <div className=" py-[4rem]  pl-[1rem]">
          <div className="content">
            <p
              className=" text-base
            md:text-heading leading-relaxed"
            >
              JUST A DREAM, NOW PART OF THE AWAKENING OF OVER SEVEN MILLION
              PEOPLE
            </p>

            <h1 className=" text-[2rem]  leading-snug font-bold mb-6">
              Future Governing Structures & Citizenship
            </h1>

            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse"
                >
                  What appeared initially just as
                </AccordionHeader>

                <AccordionBody className="text-base">
                  a dream is now part of an awakening for over seven million
                  people who have already applied for citizenship and have
                  galvanized international luminaries from every continent in
                  the world. Future “Citizenship by Investment” programs will
                  also feature financial assistance for applicants.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2"
                >
                  The Kingdom will introduce the establishment
                </AccordionHeader>

                <AccordionBody className="text-base">
                  of the Ministry of Peaceful Coexistence and intends to create
                  a better way of life that is free from various humanitarian
                  abuses such as inquisition, holocaust, slavery, or what
                  happened in Tulsa Oklahoma (“Black Wall Street”), so the
                  history does not repeat itself ever again. The core group has
                  thoroughly studied over 195 national constitutions and learned
                  many lessons in order to implement an effective governance for
                  the Kingdom.
                </AccordionBody>
              </Accordion>
            </div>
            <p className="text-base mb-4">
              of the Ministry of Peaceful Coexistence and intends to create a
              better way of life that is free from various humanitarian abuses
              such as inquisition, holocaust, slavery, or what happened in Tulsa
              Oklahoma (“Black Wall Street”), so the history does not repeat
              itself ever again. The core group has thoroughly studied over 195
              national constitutions and learned many lessons in order to
              implement an effective governance for the Kingdom.
            </p>
            <p className="text-base">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[3rem]">
        <div
          className={` 
             slider
          py-4
    
          px-10
        
        `}
        >
          <Image src={s1} height={800} width={800} alt="slider image" />
        </div>

        <div className=" py-[4rem]  pl-[1rem] hidden md:block">
          <div className="content">
            <p
              className=" text-base
            md:text-heading leading-relaxed"
            >
              JUST A DREAM, NOW PART OF THE AWAKENING OF OVER SEVEN MILLION
              PEOPLE
            </p>

            <h1 className=" text-[2rem]  leading-snug font-bold mb-6">
              Future Governing Structures & Citizenship
            </h1>

            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse"
                >
                  What appeared initially just as
                </AccordionHeader>

                <AccordionBody className="text-base">
                  a dream is now part of an awakening for over seven million
                  people who have already applied for citizenship and have
                  galvanized international luminaries from every continent in
                  the world. Future “Citizenship by Investment” programs will
                  also feature financial assistance for applicants.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2"
                >
                  The Kingdom will introduce the establishment
                </AccordionHeader>

                <AccordionBody className="text-base">
                  of the Ministry of Peaceful Coexistence and intends to create
                  a better way of life that is free from various humanitarian
                  abuses such as inquisition, holocaust, slavery, or what
                  happened in Tulsa Oklahoma (“Black Wall Street”), so the
                  history does not repeat itself ever again. The core group has
                  thoroughly studied over 195 national constitutions and learned
                  many lessons in order to implement an effective governance for
                  the Kingdom.
                </AccordionBody>
              </Accordion>
            </div>
            <p className="text-base mb-4">
              of the Ministry of Peaceful Coexistence and intends to create a
              better way of life that is free from various humanitarian abuses
              such as inquisition, holocaust, slavery, or what happened in Tulsa
              Oklahoma (“Black Wall Street”), so the history does not repeat
              itself ever again. The core group has thoroughly studied over 195
              national constitutions and learned many lessons in order to
              implement an effective governance for the Kingdom.
            </p>
            <p className="text-base">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureGoverning;
