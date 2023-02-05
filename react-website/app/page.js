"use client";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import React from "react";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import logo from "../public/logo_final.svg";

function Loader() {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 5500);
  }, []);

  return (
    <div id="fadeOut">
      {showElement && (
        <div className="justify-center flex max-h-screen min-w-full bg-white absolute py-5">
          <svg
            className="justify-center flex"
            viewBox="-225 -225 1000 1000"
            version="1.1"
          >
            <path
              id="j_path"
              d="M184.976 212.481C184.576 362.881 185.243 351.681 174.709 373.548C166.443 390.614 154.043 401.681 136.176 407.814C128.709 410.348 124.709 410.881 110.043 410.881C94.5759 410.881 91.3759 410.348 80.8426 407.014C66.9759 402.481 52.0426 393.014 44.3092 384.081L39.1092 377.948L27.6426 390.348C21.2426 397.148 16.0426 403.148 16.0426 403.681C16.0426 405.814 29.1092 418.748 36.7092 424.348C59.5092 440.614 85.6426 447.014 119.376 444.614C170.309 441.014 203.376 413.548 217.243 363.548L220.709 350.881L221.109 214.481L221.509 78.2142H203.509H185.509L184.976 212.481Z"
              fill="white"
              stroke="#000000"
              strokeWidth="4"
            />
            <path
              id="diag_path"
              d="M232.043 83.1475C233.776 85.9475 240.576 98.0809 247.376 110.214C254.043 122.348 261.243 135.148 263.376 138.881C266.576 144.748 286.976 176.214 324.709 233.814C346.843 267.681 361.643 290.214 376.709 313.548C385.376 326.748 396.176 343.281 400.709 350.214C405.376 357.148 419.376 378.748 432.043 398.214C444.576 417.681 456.309 435.548 457.776 437.814L460.709 442.214H477.776C487.109 442.214 494.709 441.814 494.709 441.281C494.709 440.881 487.109 427.548 477.909 411.681C463.109 386.348 448.576 363.148 411.643 306.214C392.576 276.881 381.776 260.081 366.576 236.481C358.176 223.548 348.709 208.614 345.376 203.548C331.109 181.548 285.109 110.214 275.376 94.8809L264.709 78.3475L246.976 78.2142H229.109L232.043 83.1475Z"
              fill="white"
              stroke="#000000"
              strokeWidth="4"
            />
            <path
              id="down_path"
              d="M461.376 221.014C461.376 356.881 461.509 363.948 463.776 367.281C465.109 369.281 472.709 382.214 480.709 396.214C488.576 410.081 495.643 422.081 496.309 422.748C496.843 423.548 497.376 346.214 497.376 251.148V78.2142H479.376H461.376V221.014Z"
              fill="white"
              stroke="#000000"
              strokeWidth="4"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "",
      "Software Engineer",
      "CS Student at The University of Texas at Dallas",
      "Looking for a Summer Internship 2023",
    ],
    typeSpeed: 100,
    deleteSpeed: 75,
    delaySpeed: 5000,
    loop: 0,
  });

  const [showElement, setShowElement] = React.useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 5000);
  }, []);

  return (
    <div className="App text-2xl py-2">
      <span>{text}</span>
      <Cursor
        cursorStyle="_"
        cursorColor={showElement ? "black" : "white"}
        cursorBlinking="true"
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className=" bg-white">
      <Loader />
      <section className="min-h-screen px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <Image
            alt="logo"
            src={logo}
            className="h-20 w-20 justify-center flex"
          />
          <ul className="flex items-center gap-2">
            <li
              className="text-5xl flex justify-center gap-16 py-2
         text-gray-800"
            >
              <a href="https://github.com/justjdnguyen" target={"_blank"}>
                <AiFillGithub />
              </a>
            </li>
            <li
              className="text-5xl flex justify-center gap-16 py-2
         text-blue-500"
            >
              <a
                href="https://www.linkedin.com/in/jimmypdnguyen/"
                target={"_blank"}
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="bg-gradient-to-r from-violet-300 to-blue-400 text-xl text-white px-3 py-2 rounded flex justify-center gap-2">
              <AiOutlineDownload className="mt-1" />
              <a
                href="https://drive.google.com/uc?export=download&id=1QfWhzhjOWgzZ0lSiBiIbk4NxFi7I1OLu"
                target={"_blank"}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-left p-10">
          <h1 className="text-5xl font-medium">Jimmy Nguyen</h1>
          <TypeWriter />
        </div>
      </section>
    </main>
  );
}
