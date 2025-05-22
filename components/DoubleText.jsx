import {
  trumpGothicBoldItalic,
  trumpGothicBoldItalicWoff2,
  trumpGothicItalic,
  trumpGothicRegular,
  trumpGothicRegularWoff2,
} from "@/font-loader/fonts";
import React from "react";

const DoubleText = ({
  firstText,
  firstTextClassName = "tracking-[4px] text-3xl md:text-5xl lg:text-7xl font-semibold",
  secondText,
  secondTextClassName = "",
}) => {
  return (
    <div>
      {/* <span className={`${trumpGothicRegular.className} text-white ${firstTextClassName}`}>OUR VALUED</span><span className={`${trumpGothicBoldItalic.className} ${secondTextClassName}`}>PARTNERS</span> */}
      <span className={`text-center text-white uppercase ${firstTextClassName} ${trumpGothicRegularWoff2.className}`} style={{letterSpacing:"1.5px", fontWeight:"700"}}>
        {firstText}{" "}
        <span
          className={`${trumpGothicBoldItalicWoff2.className} ${secondTextClassName}`}
          style={{ color: "var(--primary-color)" }}
        >
          {secondText}
        </span>
      </span>
    </div>
  );
};

export default DoubleText;
