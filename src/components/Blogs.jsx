import React from "react";
import "../../src/blogs.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <section class="relative bg-black w-screen h-[400px] flex justify-center items-center">
        <img
          class="absolute right_image left-0 w-[37rem]"
          src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931009/circuit-board-pattern-technology-white-background-oikjhgvector-36687060_vuepqj.png"
        />

        <divc class="text-center text-5xl font-bold bluish">
          <div class="text-white">WELCOME !</div>
          <div class="text-white">TO OUR BLOG PAGE</div>
        </divc>
        <img
          class="absolute left_image right-0 w-[32rem]"
          src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931011/Untitled-removebg-preview_lsk0zk.png"
        />
      </section>

      <section class="blog_page w-screen py-10">
        <div class="flex w-screen justify-center flex-wrap">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blogs;
