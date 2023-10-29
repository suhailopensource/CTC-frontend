import React from "react";

const BlogCard = () => {
  return (
    <>
      <div class="flex relative w-[350px] blackieee  flex-col justify-center items-center rounded-[15px] md:mx-5 mb-10">
        <img class="relative rounded-t-[15px]" src="../src/assets/ghfrhu.png" />
        <div class="text-white p-5">
          <div class="text-2xl font-bold my-2">Elasticsearch- II</div>
          <div class="my-2">
            In this blog we are going to learn how to use elasticsearch and
            kibana using python. Before getting into this, make sure that you
            have elasticsearch...
          </div>
          <div class="font-thin text-gray-400">
            By Karthikaa R October 20, 2022
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
