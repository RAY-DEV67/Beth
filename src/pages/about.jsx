// import Daiverse1 from "../assets/sunday1.webp";
// import Daiverse2 from "../assets/sunday3.webp";
// import Daiverse3 from "../assets/aboutb.png";
// import Daiverse4 from "../assets/about2b.png";
// import { Theme } from "../App";
import beth1 from "../assets/beth23.jpg";
import beth2 from "../assets/beth22.jpg";
import { useContext } from "react";

export function About() {
//   const theme = useContext(Theme);

  return (
    <div className="pt-[5%] bg-[#80b6e5] h-[100%]">
      <h1 className="heading text-[#f3f3f3]">About</h1>
      <div className="flex flex-col items-center">
        <div className="w-[90%]">
<div className="flex flex-col items-center">
<div className="flex flex-col items-center lg:flex-row lg:w-[70vw]">
         <div>
         <h2 className="text-xl stylesfont lg:text-5xl font-bold mb-[1rem] text-[#f3f3f3] subheading">
            Give a summary of your journey so far
          </h2>
          <p className=" lg:text-2xl abouttext">
            Hmmmmmm, it started about 4 to 5 years back when a photographer approached me, he said "I love your height and stature" and wanted to take pictures of me so he gave me his number and collected mine, I was really really stunned by that, because i was not proud of my height and stature then, people call me slim, too tall, but now i'm very proud of my height. Then i came to a realization that i can really be a model, and to be honest i thought he was lying but that meeting sparked a fire in me, from that day on i really wanted to be a model. So i accepted the offer and took the pictures.
          </p>
          <h3 className="text-xl stylesfont lg:text-5xl font-bold my-[1rem] text-[#f3f3f3] subheading">
            What is fashion to you?
          </h3>
          <p className="lg:text-2xl abouttext">
            To me, fashion is a way of expressing yourself. You can tell the world about your personality just by the type of clothes you wear. If i'm feeling classy i will wear a skirt or pants with a nice blouse or dress, some days i wear heels some days i wear sneakers. Most times on baggy because its super convenient. This is how i gain confidence for myself, because i always feel better when i look my best and feel my best.
          </p>
         </div>

         <img
            alt="Daiverse"
            src={beth1}
            className="w-[100vw] h-[65rem] mt-[1rem] sm:w-[50vw] lg:h-[45rem] lg:w-[30vw] object-cover"
          />
         </div>
</div>
<div className="flex flex-col items-center">
<div className="flex flex-col items-center lg:flex-row lg:w-[70vw]">
  <div>
    
<h3 className="text-xl stylesfont lg:text-5xl font-bold mb-[1rem] mt-[3rem] text-[#f3f3f3] subheading">
            My First Shoot
          </h3>
          <p className="lg:text-2xl abouttext">
        It was a very interesting shoot because i have never been in front of a camera before, it was a very first for me and omoooo i was looking so pretty mehhh, it was a makeup shoot and when i saw the pictures i was like wowwww i really do look like a model.
          </p>
          <p className="lg:text-2xl mt-[1rem] abouttext">
        I read about modelling online, how to be a supermodel, watched videos on YouTube and all, So i wanted to grow my portfolio so i reached out to photographers and makeup artists on Ig, some ghosted me, some just never responded but some i did get to work with. Then from the shoots to shoots, i actually did a lot of shoots for free but i was getting better and better and i got more confident because of that.
         </p>
         <p className="lg:text-2xl mt-[1rem] abouttext">
       So i started creating shoot with my friends and i knew that social media was such a big part of the industry so i decided to figure out how to grow my followersand also studied countless agency model's portfolios, to see what i could work on. I practiced posing, facial expressions, how to walk, practicing in mirror and also taking digitals and submitting to agencies then i got in contact with Mahogany models on instagram which is my modeling agencyright now, I wanted to try it big, so that's pretty much my story. So far i have been in 4 fashion shows and i have had a good number of photoshoots. I like to believe i'm good in all aspects.... no wait lol i believe i'm really good. 
       </p>
       <p className="lg:text-2xl mt-[1rem] abouttext">
       It has been a gradual and steady process, filled with lessons, laughter, bad days, painful feet and all. Modelling is a real struggle
       </p>
  </div>

          <img
            alt="Daiverse"
            src={beth2}
            onClick={() => {
              setcheck("new");
            }}
            className="w-[100vw] h-[65rem] mt-[1rem] sm:w-[50vw] lg:h-[45rem] lg:w-[30vw] object-cover main"
          />
</div>
</div>
        </div>
      </div>
    </div>
  );
}
