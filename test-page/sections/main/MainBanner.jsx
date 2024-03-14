import { useEffect, useRef } from "react";
import Image from "next/image";
import { demo_1 } from "@/constants";

export default function MainBanner() {
  useEffect(() => {
    let section = document.getElementsByTagName("section");
    // let imageBox = document.querySelectorAll(".imageBox");
    // let contentBox = document.querySelectorAll(".contentBox");

    let pageNum = 0;
    let totalNum = section.length;

    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;

      for (var i = 0; i < totalNum; i++) {
        if (
          scroll > section[i].offsetTop - window.outerHeight / 2.5 &&
          scroll <
            section[i].offsetTop -
              window.outerHeight / 2.5 +
              section[i].offsetHeight
        ) {
          pageNum = i;
          break;
        }
      }
      pageChangeFunc();
    });

    const pageChangeFunc = () => {
      for (let i = 0; i < totalNum; i++) {
        // imageBox[i].classList.remove("opacity-100");
        section[i].classList.remove("active");
      }
      // imageBox[pageNum].classList.add("opacity-100");
      section[pageNum].classList.add("active");
    };
    pageChangeFunc();
  }, []);

  return (
    <>
      <section className="w-full h-screen sectionBox opacity-0 duration-500 border-4">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-[60px] ">신즈게임즈 효과 데모</h1>
        </div>
      </section>

      {demo_1.map((el, idx) => {
        return (
          <section
            key={idx}
            className=" w-full h-screen sectionBox opacity-100 bg-slate-950 duration-500"
          >
            <div className="fixed top-0 w-full h-full bg-slate-950">
              <div className="w-full h-full flex bg-slate-950">
                <div className="flex-1 bg-slate-950 ">
                  <Image
                    className="w-full h-full bg-slate-950"
                    src={el.img}
                    width={500}
                    height={900}
                    alt="데모그림"
                  />
                </div>
                {/* <div className="flex-1 flex items-center justify-center">
                  <div>
                    <h3 className="text-[60px]">{el.title}</h3>
                    <p>{el.contents}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        );
      })}
      <section className="w-full h-screen opacity-0 duration-500">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-[60px] ">신즈게임즈 마무리</h1>
        </div>
      </section>
    </>
  );
}
