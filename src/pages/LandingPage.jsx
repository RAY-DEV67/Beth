import video from "../assets/bethvideo.mp4";
import gtvideo from "../assets/gtvideo.mp4";
import habbit from "../assets/habbitvideo2.mp4";
import pizza from "../assets/pizza2.mp4";
import zaggi from "../assets/zaggibeth.mp4";
import HOS from "../assets/houseofsota.jpg";
import gtbeth1 from "../assets/gtbeth1.jpg";
import gtbeth2 from "../assets/gtbeth2.jpg";
import gtbeth3 from "../assets/gtbeth3.jpg";
import gtbeth4 from "../assets/gtbeth4.jpg";
import beth1 from "../assets/beth1.jpg";
import beth2 from "../assets/beth2.jpg";
import beth3 from "../assets/beth3.jpg";
import beth4 from "../assets/beth4.jpg";
import beth5 from "../assets/beth5.jpg";
import beth6 from "../assets/beth6.jpg";
import beth7 from "../assets/beth7.jpg";
import beth8 from "../assets/beth8.jpg";
import beth9 from "../assets/beth9.jpg";
import beth10 from "../assets/beth10.jpg";
import beth11 from "../assets/beth11.jpg";
import beth12 from "../assets/beth12.jpg";
import beth13 from "../assets/beth13.jpg";
import beth14 from "../assets/beth14.jpg";
import beth15 from "../assets/beth15.jpg";
import beth16 from "../assets/beth16.jpg";
import beth18 from "../assets/beth18.jpg";
import beth19 from "../assets/beth19.jpg";
import beth20 from "../assets/beth20.jpg";
import beth21 from "../assets/beth21.jpg";
import beth22 from "../assets/beth22.jpg";
import beth23 from "../assets/beth23.jpg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div className={`${isVisible ? "showhead" : "head"}`} ref={animatedRef}>
      {children}
    </div>
  );
};

const TextAnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${isVisible ? "showtext text-center" : "text"}`}
      ref={animatedRef}
    >
      {children}
    </div>
  );
};

export function LandingPage() {
  return (
    <div className="bg-[#80b6e5] text-[#f3f3f3]">
      <div className="bg-[#80b6e5] relative">
        <video autoPlay muted playsInline loop className="h-[90vh] w-[100vw]">
          <source src={video} type="video/mp4" className="" />
        </video>
        <div className="absolute top-0 flex flex-col items-center justify-end">
          <TextAnimatedDiv>
            <div className="overlay h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
              <p className="welcomefont text-[7vw] lg:text-[3vw] text-[#d9d9d9] text-center">
                IT'S
              </p>
              <p className="text-center text-[7vw] lg:text-[3vw] stylesfont font-bold text-white">
                Queen Beth
              </p>
              <div className="flex flex-col items-center">
                <p className=" text-[#d9d9d9] text-center w-[70%]">
                  Queen Beth is a highly sought-after fashion model known for
                  her stunning runway presence and unique look. With her
                  striking features and confident demeanor, she has captivated
                  audiences and designers alike, becoming one of the most
                  recognizable faces in the industry. 
                </p>
                <p className=" text-[#d9d9d9] text-center w-[60%]">
                  If you are looking to working with a passionate professional,
                  then drop me a message or give me a call
                </p>
              </div>

              <a
                href="https://www.instagram.com/direct/t/340282366841710300949128115078988223791"
                target="_Blank"
                className="flex flex-col items-center mt-[1rem]"
              >
                <button
                  to="/Styles"
                  className="border text-[3vw] bg-[#80b6e5] border-white font-bold text-black text-xl py-[0.3rem] px-[1rem]"
                >
                  Work with me
                </button>
              </a>
            </div>
          </TextAnimatedDiv>
        </div>
        {/* <div className="overlay2 absolute top-0 h-[100%] w-[100vw]"></div> */}
      </div>
      <div className="mt-[2rem]">
        <h2 className="text-center text-[#343131] text-3xl lg:text-[4rem] lg:mb-[1rem] welcomefont">
          LOOK BOOK
        </h2>
        <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <AnimatedDiv>
            <div className="bg-[#343131] w-[45vw] lg:w-[30vw]">
              <img
                src={beth1}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth23}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth22}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth2}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth3}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth21}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth20}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth4}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth5}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth18}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth19}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>

          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth6}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth7}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth8}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth9}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth10}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth11}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth12}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth13}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth14}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>

          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth15}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={beth16}
                alt="Beth"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#80b6e5] mt-[1rem] relative">
            <video autoPlay playsInline muted loop className="h-[90vh] w-[100vw]">
              <source src={gtvideo} type="video/mp4" className="" />
            </video>
            <div className="absolute top-0 flex flex-col items-center justify-end">
              <TextAnimatedDiv>
                <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
                  <p className="text-3xl overlay w-[100vw] py-[1rem]">
                    GTCO FASHION WEEK
                  </p>
                </div>
              </TextAnimatedDiv>
            </div>
          </div>
          <div className="mt-[1rem]">
            <AnimatedDiv>
              <div className="bg-[#d9d9d9] w-[90vw] lg:w-[30vw]">
                <img src={gtbeth1} alt="Beth" className="funke lg:h-[80vh]" />
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="bg-[#d9d9d9] w-[90vw] mt-[1rem] lg:w-[30vw]">
                <img src={gtbeth2} alt="Beth" className="funke lg:h-[80vh]" />
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="bg-[#d9d9d9] w-[90vw] mt-[1rem] lg:w-[30vw]">
                <img src={gtbeth3} alt="Beth" className="funke lg:h-[80vh]" />
              </div>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className="bg-[#d9d9d9] w-[90vw] mt-[1rem] lg:w-[30vw]">
                <img src={gtbeth4} alt="Beth" className="funke lg:h-[80vh]" />
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-[#343131] mt-[2rem] text-2xl lg:text-[4rem] lg:mb-[1rem] welcomefont">
          BRANDS IVE WORKED WITH
        </h2>
        <div className="bg-[#80b6e5] mt-[1rem] relative">
          <video autoPlay muted playsInline loop className="h-[90vh] w-[100vw]">
            <source src={pizza} type="video/mp4" className="" />
          </video>
          <div className="absolute top-0 flex flex-col items-center justify-end">
            <TextAnimatedDiv>
              <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
                <p className="text-3xl overlay w-[100vw] py-[1rem]">
                  Pizza Novar
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
        </div>
        <div className="bg-[#80b6e5] mt-[1rem] relative">
          <video autoPlay muted playsInline loop className="h-[90vh] w-[100vw]">
            <source src={habbit} type="video/mp4" className="" />
          </video>
          <div className="absolute top-0 flex flex-col items-center justify-end">
            <TextAnimatedDiv>
              <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
                <p className="text-3xl overlay w-[100vw] py-[1rem]">
                  Habit Brand
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
        </div>
        <div className="bg-[#80b6e5] mt-[1rem] relative">
          <video autoPlay muted playsInline loop className="h-[90vh] w-[100vw]">
            <source src={zaggi} type="video/mp4" className="" />
          </video>
          <div className="absolute top-0 flex flex-col items-center justify-end">
            <TextAnimatedDiv>
              <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
                <p className="text-3xl overlay w-[100vw] py-[1rem]">
                  Zaggi Wears
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
        </div>
        <div className="bg-[#80b6e5] mt-[1rem] relative">
          <div className="flex flex-col items-center">
            <img src={HOS} alt="House of sota" className="w-[90vw]" />
          </div>
          <div className="absolute top-0 flex flex-col items-center justify-end">
            <TextAnimatedDiv>
              <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center py-[1rem] lg:w-[100vw]">
                <p className="text-3xl overlay w-[100vw] py-[1rem]">
                  House Of Sota
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
        </div>
      </div>

      <div className="h-[100vh] flex flex-col items-center mt-[1rem] text-[#000009] font-bold justify-center footer">
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/queenbeth__/" target="_Blank">
            <svg
              width="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>instagram [#167]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -7439.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                        id="instagram-[#167]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/queenbeth____"
            target="_Blank"
            className="mx-[0.5rem]"
          >
            <svg
              width="20px"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            href="mailto:ajaajayiifeelizabeth@gmail.com"
            target="_Blank"
            className=""
          >
            <svg
              width="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        <div className="">
          <h3 className="text-xl text-white text-center mb-[1rem] mt-[1rem] font-bold">
            For Bookings & Enquires
          </h3>
          <p className="text-white">EMAIL:ajaajayiifeelizabeth@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
