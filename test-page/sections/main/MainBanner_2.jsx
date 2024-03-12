import { useEffect, useRef } from "react";
import Image from "next/image";
import { demo_1 } from "@/constants";

export default function MainBanner() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    let section = document.querySelectorAll(".demoSection");
    let pageNum = 0;
    let totalNum = section.length;

    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;

      for (var i = 0; i < totalNum; i++) {
        if (
          scroll > section[i].offsetTop - window.outerHeight / 1.5 &&
          scroll <
            section[i].offsetTop -
              window.outerHeight / 1.5 +
              section[i].offsetHeight
        ) {
          pageNum = i;
          break;
        }
      }
      pageChangeFunc();

      console.log("=====>", scroll);
    });

    const pageChangeFunc = () => {
      for (let i = 0; i < totalNum; i++) {
        section[i].classList.remove("opacity-100");
      }
      section[pageNum].classList.add("opacity-100");
    };
    pageChangeFunc();
  }, []);

  return (
    <>
      {demo_1.map((el, idx) => {
        return (
          <section
            key={idx}
            className="w-full h-screen demoSection duration-500 opacity-0 sticky top-0"
          >
            <div className="w-full h-full flex">
              <div className="flex-1">
                <Image
                  className="w-full h-full"
                  src={el.img}
                  width={500}
                  height={900}
                  alt="데모그림"
                />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div>
                  <h3>{el.title}</h3>
                  <p>{el.contents}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
