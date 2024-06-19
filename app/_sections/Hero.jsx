import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/hero-img.jpeg";
import { propertyReturns } from "../_constants";
import Navbar from "../_components/Navbar";

const Hero = () => {
  return (
    <section className="relative md:h-screen overflow-hidden">
      <div className="relative md:h-full">
        {/* Image with gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src={heroImg}
            alt="damac"
            fill
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#082e60] to-[rgba(24,141,249,0.05)] opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4">
     <Navbar/>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mt-20">
              <div>
                <h1 className="text-4xl  lg:text-5xl font-semibold font-oswald">
                  HARBOUR LIGHTS DE{" "}
                  <span className="text-[#17ABFF]">GRESOGONO</span>
                </h1>
                <p className="text-[16px] sm:text-xl md:text-2xl font-medium my-4">
                  1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                </p>
              </div>

              <ul className="mt-12">
                {propertyReturns.map((property, index) => (
                  <li
                    key={index}
                    className="p-3 bg-slate-900/65 my-2 max-w-96 border-l-4 border-[#17ABFF]"
                  >
                    {property.label} <strong>{property.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card */}
            <div className="flex-1 bg-transparent flex justify-center md:justify-end md:m-0 m-6 mb-8 md:mb-0 items-end">
              <div className="max-w-[305px] bg-[#000]/10 backdrop-blur-md  shadow-2xl border  pt-10 rounded-xl  ">
                <div className="px-6">
                  <p className="font-light tracking-wide">
                    PRICING STARTS FROM
                  </p>
                  <p className="text-5xl font-medium my-1 font-oswald">
                    $ 425,000
                  </p>
                  <p className="text-2xl  my-2 font-oswald">AED 1.3 Million</p>
                  <button className="bg-[#17ABFF] w-full my-4 mb-8 py-3 px-10 rounded-md text-sm font-medium hover:bg-[#17ABFF]/60 border border-[#17ABFF] hover:border-[#fff] transition">
                    GET A PRESENTATION
                  </button>
                </div>

                <p className="px-6 py-4 border-t-2 border-[rgba(0,0,0,0.3)] text-[#98C5E8] text-[13px]">
                  Get an Expert&apos;s Presentation of Real Estate in Dubai for
                  Life and investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
