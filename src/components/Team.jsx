import React from "react";
import Navbar from "./Navbar";
import "../../src/team.css";
import Members from "./Members";

const Team = () => {
  return (
    <>
      <div className="bg-black h-[700px] w-screen flex items-center justify-center">
        <div className="text-white h-[266px] w-[560px] text-center text-2xl smaller_text capitalize px-2">
          <span className="text-cyan-300 text-3xl">C</span>rescent Technocrats
          Club was established in 2020 as the technical club of B S Abdur Rahman
          Crescent Institute of Science and Technology. The main focus of the
          club is to get students on board for technical skill improvement
          through various kind of programs.
        </div>
      </div>

      <section className="bg-black  w-screen mb-10 z-[-1000000]  relative ">
        <div className="p-10">
          <div className=" flex justify-center ">
            <div className="text-white font-bold text-2xl">MEET THE TEAM</div>
          </div>
          <br />
          <br />
          <br />

          <div className="flex justify-center items-center landscape_card hidden">
            <div className="w-[75%]  blackie">
              <div className="flex ">
                <img className="w-2/5 h-[500px]" src="../src/assets/HOD.png" />
                <div className="w-3/5 flex items-center justify-center relative">
                  <div className="text-white p-5">
                    <div className="mb-5 font-bold text-3xl ">
                      Dr. W. Aisha Banu M.E.,Ph.D
                    </div>

                    <div className="text-2xl">
                      HOD - Computer Science & Engineering
                    </div>
                    <div className="text-2xl">
                      Staff Coordinator - Crescent Technocrats Club
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center portrait_card hidden">
            <div className=" blackie w-[400px]">
              <div className="flex flex-col ">
                <img className="w-full h-[400px]" src="../src/assets/HOD.png" />
                <div className="w-full flex items-center justify-center ">
                  <div className="text-white p-5 text-center">
                    <div className="mb-5 font-bold text-3xl ">
                      Dr. W. Aisha Banu M.E.,Ph.D
                    </div>

                    <div className="text-2xl">
                      <span className="font-bold">HOD</span> - Computer Science
                      & Engineering
                    </div>
                    <div className="text-2xl">
                      <span className="font-bold">Staff Coordinator</span> -
                      Crescent Technocrats Club
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 z-[-1] "
          src="../src/assets/hefgru.png"
        />
      </section>
      <Members />
      <img
        class="absolute left-0 bottom-0 responsive_img"
        src="../src/assets/hefgru.png"
      />
      <img
        class="absolute right-0 bottom-0 responsive_img"
        src="../src/assets/lol-removebg-preview.png"
      />
    </>
  );
};

export default Team;
