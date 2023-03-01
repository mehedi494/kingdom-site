import React from "react";
import styles from "../../styles/styles.module.css";

function WorkInquiries() {
  return (
    <section className="work">
      <div
        className={`${styles.workBg} 
               h-[28rem] my-10 flex items-center justify-center`}
      >
        <div className="box  px-8 py-2 pb-[6rem] bg-[#00000070] text-white">
          <h5  className="text-base">WORK INQUIRIES</h5>
          <h1 className="text-[2rem] font-bold">African Diaspora</h1>
          <p className="text-base leading-relaxed mt-4">
            African country, the Kingdom of Kush will also be established as a
            place to experience a homecoming for all people of African descent.
            The African diaspora is invited to live, learn, work, invest, and
            prosper in the Kingdom, and as a result, in the region and the
            entire continent.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WorkInquiries;
