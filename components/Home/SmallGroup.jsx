import React from "react";
import styles from "../../styles/aboutUsSection.module.css";
import { BsIntersect } from "react-icons/bs";

function smallGroup() {
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[3rem]">
        <div
          className={`${styles.smallGroup} py-10 
          
           h-[25rem]
          
          `}
        ></div>

        <div className=" py-[4rem]  pl-[1rem]">
          <div className="content">
            <p
              className=" text-base
              md:text-heading leading-relaxed"
            >
             WHAT STARTED AS A SMALL GROUP OF ENTHUSIASTS FROM ALL WALKS OF LIFE HAS OVER THE PAST TWO DECADES TRANSFORMED INTO A MASSIVE LIVING ORGANISM OF VOLUNTEERS.
            </p>
            <p className=" text-base mt-7 pr-[3rem] xl:pr-[25rem] leading-relaxed ">
            What started as a small group of enthusiasts from all walks of life has over the past two decades transformed into a massive living organism of volunteers. These volunteers have one common goal – to make their vision of the Kingdom of Kush a reality, with all efforts passionately undertaken in a decentralized but very methodical and cohesive manner due to the noble nature of the cause. The Kingdom of Kush is an “open-source” smart city state, inviting all to take part in creating access to prosperity and well-being for present and future generations to come. Many countries have already expressed unequivocal recognition and support for the new nation and our ethos which at its core embodies intercultural diversity, and the value of human connection. This will not be a place that values one race or religion over another but will offer inclusivity to all people. Diverse cultural expressions in music, art, film, culinary arts, and sports will weave every participating culture into this beautiful tapestry which we hope to share with the world through satellite Kingdom of Kush micro-communities soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default smallGroup;
