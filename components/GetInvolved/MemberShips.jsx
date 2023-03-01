import React from "react";
import Image from "next/image";
import styles from "../../styles/styles.module.css";
// imports imgage

function MemberShips() {
  return (
    <>
      <section>
        <div className=" grid grid-cols-1 md:grid-cols-2   justify-items-center lg:justify-items-start  items-center ">
          <div
            className={` ${styles.basicInfoBg}  min-h-[36rem]    `}
          ></div>

          <div className=" py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[4rem] md:pr-8">
            <div className="content mb-[1.5rem] mt-4">
              
              
              <h1 className="leading-[3rem]  xl:hidden font-bold  text-[2.8rem] ">
                Membership  application.
              </h1>
             
              <h1 className="leading-[3rem] xl:leading-[5rem] hidden xl:block font-bold  text-[2.8rem] xl:text-[5.5rem]">
                Membershi <br/> p <br/>  application. 
              </h1>

              <p className=" font-base mt-12">
                Feel a new experience in an incredible project
              </p>
              <p
                className="font-base font-bold
            "
              >
                Kingdom of Kush
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberShips;
