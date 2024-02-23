"use client";
import { useState } from "react";

export default function Home() {
  const [promt, setPromt] = useState("");
  const [image, setImage] = useState("");
  const defaultimage =
    "https://img.freepik.com/premium-photo/beautiful-ancient-roman-girl-portrait-fantasy-theme-portrait-generative-ai_114386-2194.jpg?w=360";

  const generateImage = async () => {
    const res = await fetch("https://api.openai.com/v1/images/generations  ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
        "User-Agent": "C   hrome",
      },
      body: JSON.stringify({ promt, n: 1, size: "512 x512" }),

      
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className=" w-full min-h-screen p-5 flex justify-evenly items-center flex-col">
        <div className=" text-white text-2xl md:text-5xl ">
          AI image <span className=" text-pink-500">generator </span>
        </div>
        <div className=" bg-black p-1">
          <img
            src={!image ? defaultimage : image}
            alt=""
            className=" md:w-80 h-72 w-auto md:h-96 shadow-xl rounded-sm"
          />
        </div>
        <div className=" w-full flex justify-center">
          <div className=" bg-[#1f3540] gap-1 rounded-3xl lg:w-1/3 h-12  p-2 flex justify-evenly items-center">
            <input
              type="text"
              className=" h-full w-full text-white p-1 rounded-3xl focus:outline-none bg-transparent "
              placeholder=" Enter image description "
              value={promt}
              onChange={(e) => {
                setPromt(e.target.value);
              }}
            />
            <button
              className=" bg-pink-500 py-2  px-4 rounded-3xl text-white"
              onClick={generateImage}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
