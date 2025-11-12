import React from "react";
import { gsap } from "gsap";

function FlowingMenu({ items = [], darkMode }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} darkMode={darkMode} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ text, marqueeContent = [], darkMode }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const marqueeItems = marqueeContent.map((content, idx) => {
    const Icon = content.icon;
    return (
      <div key={idx} className="flex items-center gap-3 px-[2vw]">
        <Icon
          className={`
            transition-all duration-300
            ${darkMode ? "text-black" : "text-white"}
            text-[4vh] sm:text-[5vh] md:text-[6vh] 
            hover:text-blue-500
          `}
        />
        <span className="uppercase font-medium text-[2.5vh] sm:text-[3vh] md:text-[3.5vh]">
          {content.text}
        </span>
      </div>
    );
  });

  return (
    <div
      className="flex-1 relative overflow-hidden text-center "
      ref={itemRef}
    >
      <a
        className={`flex items-center justify-center h-full relative cursor-pointer uppercase font-semibold 
    ${darkMode ? "text-white" : "text-black "}
    text-[4vh] transition-colors duration-300
  `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none 
          ${darkMode ? "bg-white" : "bg-black"} translate-y-[101%]`}
        ref={marqueeRef}
      >
        <div className="h-full w-max flex" ref={marqueeInnerRef}>
          <div className="flex items-center h-full will-change-transform animate-marquee">
            {marqueeItems}
            {marqueeItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
