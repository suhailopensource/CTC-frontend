import React from "react";
import "../../src/index.css";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <div className=" flex items-center h-screen justify-center flex-col -z-99">
        <div>
          <div className="text-white text-center space-y-20">
            <div>
              <img
                className="h-60 mx-auto"
                src="../src/assets/Untitled-removebg-preview-removebg-preview.png"
              />
            </div>
            <div>
              <span className="font-serif text-xl uppercase text-cyan-200">
                “Technology is best when it brings people together".
                <br />
              </span>
              <span className="text-white text-xl capitalize">
                Join us to enrich and hone your tech skills and achieve greater
                heights.
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className=" maingoal h-screen w-100% flex items-center justify-center flex-col z-1">
        <h3 className="text-white">MAIN GOALS</h3>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 place-content-center responsive-goal">
          <div className="h-64 w-[500px] responsive-goal-div blackiediff rounded-lg relative flex items-center justify-center">
            <div className="text-white relative text-center">
              <div className="w-[300px]">
                <span className="text-white">
                  To achieve a state where every active participant of the club
                  gets an insight of the industry by hands on training and
                  Develops different skills.
                </span>
              </div>
            </div>
            <img
              src="../src/assets/arrowwpng-removebg-preview.png"
              className="absolute h-40 w-40 top-[-79px] left-[-85px]"
              alt="lol"
            />
          </div>
          <div className="h-64 w-[500px] responsive-goal-div blackiediff rounded-lg flex items-center justify-center">
            <div className="w-[300px] text-center">
              <span className="text-white">
                Collaboration with other clubs and departments for different
                projects and events.
              </span>
            </div>
          </div>
          <div className="h-64 w-[500px] responsive-goal-div blackiediff rounded-lg flex items-center justify-center">
            <div className="w-[300px] text-center">
              <span className="text-white">
                Conduct more events and bring the hidden skill in students.
              </span>
            </div>
          </div>
          <div className="h-64 w-[500px] responsive-goal-div blackiediff rounded-lg flex items-center justify-center">
            <div className="w-[300px] text-center">
              <span className="text-white">
                Develop software to supplement University needs.
              </span>
            </div>
          </div>
        </div>
      </section>
      <img
        className="absolute bottom-0 left-0 z-[-9999] responsive_img"
        src="../src/assets/hefgru.png"
      />
      <img
        className="absolute bottom-0 right-0 z-[-9999] responsive_img"
        src="../src/assets/lol-removebg-preview.png"
      />
      <img
        className="absolute bottom-[-28rem] right-0 z-[-9999]"
        src="../src/assets/egwrghd-removebg-preview.png"
        alt="lol"
      />
      <img
        className="absolute bottom-[-61rem] left-0 z-[-1]"
        src="../src/assets/hefgru.png"
      />
    </>
  );
};

export default LandingPage;
