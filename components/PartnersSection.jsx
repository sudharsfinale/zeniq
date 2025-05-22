import React from "react";
import DoubleText from "./DoubleText";

const PartnerCard = ({imgSrc}) => {
    return (
        <div className="bg-[rgb(18,18,18)] w-full items-center flex justify-center py-[16px] px-[8px]">
          <img
            style={{ height: "100px", width: "100px" }}
            src={imgSrc}
            alt="partner logo"
          />
        </div>
    )
}

const PartnersSection = () => {
  return (
    <div className="flex items-center justify-center flex-col w-screen py-[32px] gap-[12px] px-[16px]">
      <DoubleText firstText={"Our Valued"} secondText={"Partners"} firstTextClassName="text-2xl md:text-2xl lg:text-3xl" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center gap-2 max-w-7xl">
        <PartnerCard imgSrc={"/images/brands/brand-01.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-02.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-03.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-04.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-05.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-06.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-07.svg"}/>
        <PartnerCard imgSrc={"/images/brands/brand-08.svg"}/>
      </div>
    </div>
  );
};

export default PartnersSection;
