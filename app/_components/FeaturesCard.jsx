import Image from "next/image";
import { featureCards } from "../_constants";

const FeaturesCard = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-evenly md:justify-between items-center text-[#00357B] my-12 px-4 gap-y-4">
      {featureCards.map((card, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52">
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-[#FCFCFC] min-w-[160px] sm:min-w-[190px] md:min-w-[227px] min-h-[120px] sm:min-h-[140px] md:min-h-[157px] shadow-2xl mt-[-70px] sm:mt-[-100px] rounded-2xl flex justify-center items-end my-4">
            <h1 className="text-sm text-center font-semibold whitespace-pre-wrap mb-3">
              {card.title}
            </h1>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-end items-end ">
        <p className="max-w-[460px] text-[10px] text-[#686868] text-center">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
